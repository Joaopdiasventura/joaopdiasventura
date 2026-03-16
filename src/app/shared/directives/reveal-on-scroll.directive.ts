import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, inject, input, OnDestroy, PLATFORM_ID } from '@angular/core';
import { MotionRevealPreset, MOTION_REVEAL_PRESETS } from '../motion/motion.tokens';

const DEFAULT_THRESHOLD = 0.01;

@Directive({
  selector: '[appRevealOnScroll]',
  host: { class: 'reveal-on-scroll' },
})
export class RevealOnScrollDirective implements AfterViewInit, OnDestroy {
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);

  private observer: IntersectionObserver | null = null;
  private revealed = false;

  public readonly delayMs = input(0);
  public readonly once = input(true);
  public readonly preset = input<MotionRevealPreset>('card');

  public ngAfterViewInit(): void {
    const element = this.elementRef.nativeElement;
    const config = MOTION_REVEAL_PRESETS[this.preset()];

    element.style.setProperty('--reveal-blur', `${config.blur}px`);
    element.style.setProperty('--reveal-delay', `${this.delayMs()}ms`);
    element.style.setProperty('--reveal-distance-x', config.axis == 'x' ? `${config.distance}px` : '0px');
    element.style.setProperty('--reveal-distance-y', config.axis == 'y' ? `${config.distance}px` : '0px');
    element.style.setProperty('--reveal-duration', `${Math.round(config.duration * 1000)}ms`);
    element.style.setProperty('--reveal-scale', `${config.scale}`);

    if (!isPlatformBrowser(this.platformId) || this.prefersReducedMotion() || !this.supportsObserver()) {
      element.classList.add('reveal-on-scroll--visible');
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          this.revealed = true;
          element.classList.remove('reveal-on-scroll--ready');
          element.classList.add('reveal-on-scroll--visible');

          if (this.once()) {
            this.destroyObserver();
          }

          return;
        }

        if (!this.revealed || !this.once()) {
          element.classList.add('reveal-on-scroll--ready');
          element.classList.remove('reveal-on-scroll--visible');
        }
      },
      {
        rootMargin: this.toRootMargin(config.start),
        threshold: DEFAULT_THRESHOLD,
      },
    );

    this.observer.observe(element);
  }

  public ngOnDestroy(): void {
    this.destroyObserver();
  }

  private destroyObserver(): void {
    this.observer?.disconnect();
    this.observer = null;
  }

  private prefersReducedMotion(): boolean {
    return (
      typeof window.matchMedia == 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }

  private supportsObserver(): boolean {
    return typeof IntersectionObserver == 'function';
  }

  private toRootMargin(start: string): string {
    const viewportOffset = Number.parseFloat(start.split(' ')[1] ?? '');

    if (!Number.isFinite(viewportOffset)) {
      return '0px 0px -10% 0px';
    }

    return `0px 0px -${Math.max(0, 100 - viewportOffset)}% 0px`;
  }
}
