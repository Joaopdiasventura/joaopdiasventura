import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, inject, input, OnDestroy, PLATFORM_ID } from '@angular/core';
import { ViewportPointerService } from '../services/viewport-pointer.service';

type ViewportTiltPreset = 'card' | 'feature' | 'project';

interface ViewportTiltConfig {
  readonly durationMs: number;
  readonly perspective: number;
  readonly rotateX: number;
  readonly rotateY: number;
}

const DEFAULT_THRESHOLD = 0.01;

const VIEWPORT_TILT_PRESETS: Record<ViewportTiltPreset, ViewportTiltConfig> = {
  card: {
    durationMs: 320,
    perspective: 1320,
    rotateX: 7,
    rotateY: 10.5,
  },
  feature: {
    durationMs: 360,
    perspective: 1400,
    rotateX: 10,
    rotateY: 14,
  },
  project: {
    durationMs: 360,
    perspective: 1500,
    rotateX: 9,
    rotateY: 13.5,
  },
};

@Directive({
  selector: '[appViewportTilt]',
  host: { class: 'viewport-tilt' },
})
export class ViewportTiltDirective implements AfterViewInit, OnDestroy {
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly pointerService = inject(ViewportPointerService);

  private currentRotateX = 0;
  private currentRotateY = 0;
  private observer: IntersectionObserver | null = null;
  private pointerCleanup: (() => void) | null = null;

  public readonly preset = input<ViewportTiltPreset>('card', { alias: 'appViewportTilt' });

  public ngAfterViewInit(): void {
    const element = this.elementRef.nativeElement;
    const config = VIEWPORT_TILT_PRESETS[this.preset()];

    element.style.setProperty('--viewport-tilt-duration', `${config.durationMs}ms`);
    element.style.setProperty('--viewport-tilt-perspective', `${config.perspective}px`);

    if (!isPlatformBrowser(this.platformId) || this.prefersReducedMotion() || !this.supportsFinePointer()) {
      return;
    }

    if (!this.supportsObserver()) {
      this.connectPointer();
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          this.connectPointer();
          return;
        }

        this.disconnectPointer();
        this.reset();
      },
      {
        threshold: DEFAULT_THRESHOLD,
      },
    );

    this.observer.observe(element);
  }

  public ngOnDestroy(): void {
    this.observer?.disconnect();
    this.observer = null;
    this.disconnectPointer();
    this.reset();
  }

  private apply(rotateX: number, rotateY: number): void {
    if (
      Math.abs(this.currentRotateX - rotateX) < 0.05 &&
      Math.abs(this.currentRotateY - rotateY) < 0.05
    ) {
      return;
    }

    this.currentRotateX = rotateX;
    this.currentRotateY = rotateY;

    const element = this.elementRef.nativeElement;
    element.style.setProperty('--viewport-tilt-rotate-x', `${rotateX.toFixed(2)}deg`);
    element.style.setProperty('--viewport-tilt-rotate-y', `${rotateY.toFixed(2)}deg`);
  }

  private connectPointer(): void {
    if (this.pointerCleanup) {
      return;
    }

    const element = this.elementRef.nativeElement;
    const config = VIEWPORT_TILT_PRESETS[this.preset()];

    element.classList.add('viewport-tilt--active');
    this.pointerCleanup = this.pointerService.subscribe((state) => {
      if (!state.active) {
        this.reset();
        return;
      }

      this.apply(state.y * -config.rotateX, state.x * config.rotateY);
    });
  }

  private disconnectPointer(): void {
    this.pointerCleanup?.();
    this.pointerCleanup = null;
    this.elementRef.nativeElement.classList.remove('viewport-tilt--active');
  }

  private prefersReducedMotion(): boolean {
    return (
      typeof window.matchMedia == 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }

  private reset(): void {
    this.apply(0, 0);
  }

  private supportsFinePointer(): boolean {
    return (
      typeof window.matchMedia == 'function' &&
      window.matchMedia('(pointer: fine)').matches &&
      window.matchMedia('(hover: hover)').matches
    );
  }

  private supportsObserver(): boolean {
    return typeof IntersectionObserver == 'function';
  }
}
