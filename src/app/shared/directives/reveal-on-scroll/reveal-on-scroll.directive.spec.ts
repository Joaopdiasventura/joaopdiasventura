import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { RevealOnScrollDirective } from './reveal-on-scroll.directive';

class MockIntersectionObserver {
  public static instances: MockIntersectionObserver[] = [];

  public readonly disconnect = vi.fn();
  public readonly observe = vi.fn();

  public constructor(
    public readonly callback: IntersectionObserverCallback,
    public readonly options?: IntersectionObserverInit,
  ) {
    MockIntersectionObserver.instances.push(this);
  }
}

@Component({
  selector: 'app-reveal-on-scroll-test-host',
  template: `
    <div
      class="target"
      appRevealOnScroll
      [delayMs]="delayMs"
      [once]="once"
      [preset]="preset"
    ></div>
  `,
  imports: [RevealOnScrollDirective],
})
class TestHostComponent {
  public readonly delayMs = 160;
  public readonly once = true;
  public readonly preset = 'panel' as const;
}

function createMediaQueryList(query: string, matches: boolean): MediaQueryList {
  return {
    matches,
    media: query,
    onchange: null,
    addEventListener: (): void => undefined,
    removeEventListener: (): void => undefined,
    addListener: (): void => undefined,
    removeListener: (): void => undefined,
    dispatchEvent: (): boolean => false,
  } as MediaQueryList;
}

describe('RevealOnScrollDirective', () => {
  const originalMatchMedia = window.matchMedia;
  const originalIntersectionObserver = window.IntersectionObserver;

  beforeEach(async () => {
    MockIntersectionObserver.instances = [];

    const matchMediaMock = vi.fn((query: string) => createMediaQueryList(query, false));
    window.matchMedia = matchMediaMock as typeof window.matchMedia;
    window.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver;

    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();
  });

  afterEach(() => {
    window.matchMedia = originalMatchMedia;
    window.IntersectionObserver = originalIntersectionObserver;
    vi.restoreAllMocks();
  });

  it('configures the preset styles and becomes visible when intersecting', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();

    const target = fixture.nativeElement.querySelector('.target') as HTMLDivElement;
    const observer = MockIntersectionObserver.instances[0];

    expect(observer).toBeDefined();
    expect(observer.options).toEqual({
      rootMargin: '0px 0px -14% 0px',
      threshold: 0.01,
    });
    expect(target.style.getPropertyValue('--reveal-blur')).toBe('12px');
    expect(target.style.getPropertyValue('--reveal-delay')).toBe('160ms');
    expect(target.style.getPropertyValue('--reveal-distance-y')).toBe('36px');
    expect(target.style.getPropertyValue('--reveal-duration')).toBe('1040ms');
    expect(target.style.getPropertyValue('--reveal-scale')).toBe('0.97');

    observer.callback(
      [{ isIntersecting: true, target } as unknown as IntersectionObserverEntry],
      observer as unknown as IntersectionObserver,
    );

    expect(target.classList.contains('reveal-on-scroll--visible')).toBe(true);
    expect(observer.disconnect).toHaveBeenCalledTimes(1);
  });

  it('reveals immediately when reduced motion is enabled', () => {
    const matchMediaMock = vi.fn((query: string) =>
      createMediaQueryList(query, query === '(prefers-reduced-motion: reduce)'),
    );
    window.matchMedia = matchMediaMock as typeof window.matchMedia;

    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();

    const target = fixture.nativeElement.querySelector('.target') as HTMLDivElement;

    expect(MockIntersectionObserver.instances).toHaveLength(0);
    expect(target.classList.contains('reveal-on-scroll--visible')).toBe(true);
  });
});
