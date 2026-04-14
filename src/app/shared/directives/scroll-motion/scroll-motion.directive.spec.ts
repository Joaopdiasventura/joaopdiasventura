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
  selector: 'app-scroll-motion-test-host',
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
          <div #track class="track">
            <div class="card"></div>
          </div>
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

@Component({
  selector: 'app-scroll-motion-mobile-test-host',
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
          <div #track class="track">
            <div class="card"></div>
          </div>
        </div>
      </div>
    </div>
  `,
  imports: [ScrollMotionDirective],
})
class MobileTestHostComponent {
  public readonly minWidth = 0;
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
  const originalInnerHeight = window.innerHeight;
  const originalScrollY = window.scrollY;
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
      imports: [TestHostComponent, MobileTestHostComponent],
    }).compileComponents();
  });

  afterEach(() => {
    Object.defineProperty(window, 'innerWidth', {
      configurable: true,
      value: originalInnerWidth,
    });
    Object.defineProperty(window, 'innerHeight', {
      configurable: true,
      value: originalInnerHeight,
    });
    Object.defineProperty(window, 'scrollY', {
      configurable: true,
      value: originalScrollY,
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
    Object.defineProperty(window, 'innerHeight', {
      configurable: true,
      value: 900,
    });
    Object.defineProperty(window, 'scrollY', {
      configurable: true,
      value: 0,
    });

    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();

    const host = fixture.nativeElement.querySelector('.host') as HTMLDivElement;
    const sticky = fixture.nativeElement.querySelector('.sticky') as HTMLDivElement;
    const viewport = fixture.nativeElement.querySelector('.viewport') as HTMLDivElement;
    const track = fixture.nativeElement.querySelector('.track') as HTMLDivElement;
    const card = fixture.nativeElement.querySelector('.card') as HTMLDivElement;

    let hostTop = 110;

    setElementMetric(sticky, 'offsetHeight', 600);
    setElementMetric(viewport, 'clientWidth', 800);
    setElementMetric(viewport, 'clientHeight', 400);
    setElementMetric(track, 'scrollWidth', 1600);
    sticky.getBoundingClientRect = vi.fn(() => ({ top: 0 }) as DOMRect);
    card.getBoundingClientRect = vi.fn(() => ({ top: 180, height: 320 }) as DOMRect);
    host.getBoundingClientRect = vi.fn(() => ({ top: hostTop }) as DOMRect);

    window.dispatchEvent(new Event('resize'));
    mockResizeCallback?.([] as ResizeObserverEntry[], {} as ResizeObserver);

    expect(host.classList.contains('scroll-motion--active')).toBe(true);
    expect(host.style.height).toBe('1400px');
    expect(host.style.getPropertyValue('--scroll-motion-top-offset')).toBe('110px');

    const hostLayoutReads = (host.getBoundingClientRect as ReturnType<typeof vi.fn>).mock.calls.length;

    Object.defineProperty(window, 'scrollY', {
      configurable: true,
      value: 400,
    });
    window.dispatchEvent(new Event('scroll'));

    expect(track.style.transform).toBe('translate3d(-400px, 0, 0)');
    expect(host.style.getPropertyValue('--scroll-motion-progress')).toBe('0.5000');
    expect((host.getBoundingClientRect as ReturnType<typeof vi.fn>).mock.calls.length).toBe(
      hostLayoutReads,
    );
  });

  it('supports the same pinned horizontal translation on mobile when the breakpoint allows it', () => {
    Object.defineProperty(window, 'innerWidth', {
      configurable: true,
      value: 820,
    });
    Object.defineProperty(window, 'innerHeight', {
      configurable: true,
      value: 780,
    });
    Object.defineProperty(window, 'scrollY', {
      configurable: true,
      value: 0,
    });

    const fixture = TestBed.createComponent(MobileTestHostComponent);
    fixture.detectChanges();

    const host = fixture.nativeElement.querySelector('.host') as HTMLDivElement;
    const sticky = fixture.nativeElement.querySelector('.sticky') as HTMLDivElement;
    const viewport = fixture.nativeElement.querySelector('.viewport') as HTMLDivElement;
    const track = fixture.nativeElement.querySelector('.track') as HTMLDivElement;
    const card = fixture.nativeElement.querySelector('.card') as HTMLDivElement;

    let hostTop = 100;

    setElementMetric(sticky, 'offsetHeight', 540);
    setElementMetric(viewport, 'clientWidth', 360);
    setElementMetric(viewport, 'clientHeight', 420);
    setElementMetric(track, 'scrollWidth', 1400);
    sticky.getBoundingClientRect = vi.fn(() => ({ top: 0 }) as DOMRect);
    card.getBoundingClientRect = vi.fn(() => ({ top: 140, height: 300 }) as DOMRect);
    host.getBoundingClientRect = vi.fn(() => ({ top: hostTop }) as DOMRect);

    window.dispatchEvent(new Event('resize'));
    mockResizeCallback?.([] as ResizeObserverEntry[], {} as ResizeObserver);

    expect(host.classList.contains('scroll-motion--active')).toBe(true);
    expect(host.classList.contains('scroll-motion--native')).toBe(false);
    expect(host.style.height).toBe('1580px');
    expect(host.style.getPropertyValue('--scroll-motion-top-offset')).toBe('100px');

    Object.defineProperty(window, 'scrollY', {
      configurable: true,
      value: 520,
    });
    window.dispatchEvent(new Event('scroll'));

    expect(track.style.transform).toBe('translate3d(-520px, 0, 0)');
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
    expect(host.style.getPropertyValue('--scroll-motion-top-offset')).toBe('96px');
    expect(track.style.transform).toBe('');
  });
});
