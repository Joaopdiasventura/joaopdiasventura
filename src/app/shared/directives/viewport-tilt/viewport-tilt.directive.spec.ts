import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { ViewportPointerService } from '../../services/viewport-pointer/viewport-pointer.service';
import { ViewportTiltDirective } from './viewport-tilt.directive';

interface PointerState {
  readonly active: boolean;
  readonly x: number;
  readonly y: number;
}

class MockViewportPointerService {
  private listener: ((state: PointerState) => void) | null = null;

  public readonly subscribe = vi.fn((listener: (state: PointerState) => void) => {
    this.listener = listener;

    return (): void => {
      if (this.listener === listener) {
        this.listener = null;
      }
    };
  });

  public emit(state: PointerState): void {
    this.listener?.(state);
  }
}

class MockIntersectionObserver {
  public static instances: MockIntersectionObserver[] = [];

  public readonly disconnect = vi.fn();
  public readonly observe = vi.fn();

  public constructor(public readonly callback: IntersectionObserverCallback) {
    MockIntersectionObserver.instances.push(this);
  }
}

@Component({
  selector: 'app-viewport-tilt-test-host',
  template: `<div class="target" [appViewportTilt]="preset"></div>`,
  imports: [ViewportTiltDirective],
})
class TestHostComponent {
  public readonly preset = 'project' as const;
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

describe('ViewportTiltDirective', () => {
  const originalMatchMedia = window.matchMedia;
  const originalIntersectionObserver = window.IntersectionObserver;
  let pointerService: MockViewportPointerService;

  beforeEach(async () => {
    MockIntersectionObserver.instances = [];
    pointerService = new MockViewportPointerService();

    const matchMediaMock = vi.fn((query: string) => {
      const matches = query === '(pointer: fine)' || query === '(hover: hover)';
      return createMediaQueryList(query, matches);
    });
    window.matchMedia = matchMediaMock as typeof window.matchMedia;
    window.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver;

    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
      providers: [{ provide: ViewportPointerService, useValue: pointerService }],
    }).compileComponents();
  });

  afterEach(() => {
    window.matchMedia = originalMatchMedia;
    window.IntersectionObserver = originalIntersectionObserver;
    vi.restoreAllMocks();
  });

  it('connects to pointer updates when the element enters the viewport', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();

    const target = fixture.nativeElement.querySelector('.target') as HTMLDivElement;
    const observer = MockIntersectionObserver.instances[0];

    expect(observer).toBeDefined();
    expect(target.style.getPropertyValue('--viewport-tilt-duration')).toBe('360ms');
    expect(target.style.getPropertyValue('--viewport-tilt-perspective')).toBe('1500px');

    observer.callback(
      [{ isIntersecting: true, target } as unknown as IntersectionObserverEntry],
      observer as unknown as IntersectionObserver,
    );

    expect(pointerService.subscribe).toHaveBeenCalledTimes(1);
    expect(target.classList.contains('viewport-tilt--active')).toBe(true);

    pointerService.emit({
      active: true,
      x: 0.5,
      y: -0.25,
    });

    expect(target.style.getPropertyValue('--viewport-tilt-rotate-x')).toBe('2.25deg');
    expect(target.style.getPropertyValue('--viewport-tilt-rotate-y')).toBe('6.75deg');

    observer.callback(
      [{ isIntersecting: false, target } as unknown as IntersectionObserverEntry],
      observer as unknown as IntersectionObserver,
    );

    expect(target.classList.contains('viewport-tilt--active')).toBe(false);
    expect(target.style.getPropertyValue('--viewport-tilt-rotate-x')).toBe('0.00deg');
    expect(target.style.getPropertyValue('--viewport-tilt-rotate-y')).toBe('0.00deg');
  });

  it('skips pointer tracking when reduced motion is enabled', () => {
    const matchMediaMock = vi.fn((query: string) => {
      const matches =
        query === '(prefers-reduced-motion: reduce)' ||
        query === '(pointer: fine)' ||
        query === '(hover: hover)';

      return createMediaQueryList(query, matches);
    });
    window.matchMedia = matchMediaMock as typeof window.matchMedia;

    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();

    const target = fixture.nativeElement.querySelector('.target') as HTMLDivElement;

    expect(MockIntersectionObserver.instances).toHaveLength(0);
    expect(pointerService.subscribe).not.toHaveBeenCalled();
    expect(target.classList.contains('viewport-tilt--active')).toBe(false);
  });
});
