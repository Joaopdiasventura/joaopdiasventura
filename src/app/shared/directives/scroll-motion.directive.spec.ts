import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { ScrollMotionDirective } from './scroll-motion.directive';

class MockResizeObserver {
  public constructor(private readonly callback: ResizeObserverCallback) {
    mockResizeCallback = callback;
  }

  public observe(): void {
    return undefined;
  }

  public disconnect(): void {
    return undefined;
  }
}

let mockResizeCallback: ResizeObserverCallback | null = null;

@Component({
  template: `
    <div
      class="host"
      appScrollMotion
      [scrollMotionViewport]="viewport"
      [scrollMotionTrack]="track"
      [scrollMotionSticky]="sticky"
      [scrollMotionMinWidth]="minWidth"
      [scrollMotionTopOffset]="topOffset"
    >
      <div #sticky class="sticky">
        <div #viewport class="viewport">
          <div #track class="track"></div>
        </div>
      </div>
    </div>
  `,
  imports: [ScrollMotionDirective],
})
class TestHostComponent {
  public readonly minWidth = 960;
  public readonly topOffset = 96;
}

const mediaQueryListStub = {
  matches: false,
  media: '(prefers-reduced-motion: reduce)',
  onchange: null,
  addEventListener: (): void => undefined,
  removeEventListener: (): void => undefined,
  addListener: (): void => undefined,
  removeListener: (): void => undefined,
  dispatchEvent: (): boolean => false,
} satisfies MediaQueryList;

function setElementMetric(target: object, property: string, value: number): void {
  Object.defineProperty(target, property, {
    configurable: true,
    get: () => value,
  });
}

describe('ScrollMotionDirective', () => {
  const originalInnerWidth = window.innerWidth;
  const originalMatchMedia = window.matchMedia;
  const originalResizeObserver = (window as typeof window & { ResizeObserver?: typeof ResizeObserver })
    .ResizeObserver;

  beforeEach(async () => {
    mockResizeCallback = null;

    window.matchMedia = vi.fn().mockReturnValue(mediaQueryListStub) as typeof window.matchMedia;
    (
      window as typeof window & {
        ResizeObserver?: typeof ResizeObserver;
      }
    ).ResizeObserver = MockResizeObserver as unknown as typeof ResizeObserver;

    vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback: FrameRequestCallback) => {
      callback(0);
      return 1;
    });
    vi.spyOn(window, 'cancelAnimationFrame').mockImplementation(() => undefined);

    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();
  });

  afterEach(() => {
    Object.defineProperty(window, 'innerWidth', {
      configurable: true,
      value: originalInnerWidth,
    });
    window.matchMedia = originalMatchMedia;
    vi.restoreAllMocks();

    (
      window as typeof window & {
        ResizeObserver?: typeof ResizeObserver;
      }
    ).ResizeObserver = originalResizeObserver;
  });

  it('pins the section and translates the track on desktop', () => {
    Object.defineProperty(window, 'innerWidth', {
      configurable: true,
      value: 1280,
    });

    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();

    const host = fixture.nativeElement.querySelector('.host') as HTMLDivElement;
    const sticky = fixture.nativeElement.querySelector('.sticky') as HTMLDivElement;
    const viewport = fixture.nativeElement.querySelector('.viewport') as HTMLDivElement;
    const track = fixture.nativeElement.querySelector('.track') as HTMLDivElement;

    let hostTop = 96;

    setElementMetric(sticky, 'offsetHeight', 600);
    setElementMetric(viewport, 'clientWidth', 800);
    setElementMetric(track, 'scrollWidth', 1600);
    host.getBoundingClientRect = vi.fn(() => ({ top: hostTop }) as DOMRect);

    window.dispatchEvent(new Event('resize'));
    mockResizeCallback?.([] as ResizeObserverEntry[], {} as ResizeObserver);

    expect(host.classList.contains('scroll-motion--active')).toBe(true);
    expect(host.style.height).toBe('1400px');

    hostTop = -304;
    window.dispatchEvent(new Event('scroll'));

    expect(track.style.transform).toBe('translate3d(-400px, 0, 0)');
    expect(host.style.getPropertyValue('--scroll-motion-progress')).toBe('0.5000');
  });

  it('falls back to native scrolling below the desktop breakpoint', () => {
    Object.defineProperty(window, 'innerWidth', {
      configurable: true,
      value: 820,
    });

    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();

    const host = fixture.nativeElement.querySelector('.host') as HTMLDivElement;
    const sticky = fixture.nativeElement.querySelector('.sticky') as HTMLDivElement;
    const viewport = fixture.nativeElement.querySelector('.viewport') as HTMLDivElement;
    const track = fixture.nativeElement.querySelector('.track') as HTMLDivElement;

    setElementMetric(sticky, 'offsetHeight', 600);
    setElementMetric(viewport, 'clientWidth', 800);
    setElementMetric(track, 'scrollWidth', 1600);

    window.dispatchEvent(new Event('resize'));
    mockResizeCallback?.([] as ResizeObserverEntry[], {} as ResizeObserver);

    expect(host.classList.contains('scroll-motion--native')).toBe(true);
    expect(host.classList.contains('scroll-motion--active')).toBe(false);
    expect(host.style.height).toBe('');
    expect(track.style.transform).toBe('');
  });
});
