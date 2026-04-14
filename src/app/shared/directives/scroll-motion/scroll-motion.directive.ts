import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  DestroyRef,
  Directive,
  ElementRef,
  NgZone,
  PLATFORM_ID,
  inject,
  input,
} from '@angular/core';

@Directive({
  selector: '[appScrollMotion]',
  host: {
    class: 'scroll-motion scroll-motion--native',
  },
})
export class ScrollMotionDirective implements AfterViewInit {
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly zone = inject(NgZone);
  private readonly destroyRef = inject(DestroyRef);

  private resizeObserver: ResizeObserver | null = null;
  private frameId = 0;
  private scrollRange = 0;
  private active = false;
  private activeTopOffset = 0;

  public readonly scrollMotionViewport = input.required<HTMLElement>();
  public readonly scrollMotionTrack = input.required<HTMLElement>();
  public readonly scrollMotionSticky = input.required<HTMLElement>();
  public readonly scrollMotionMinWidth = input(960);
  public readonly scrollMotionTopOffset = input(96);

  public constructor() {
    this.destroyRef.onDestroy(() => {
      this.teardown();
    });
  }

  public ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.zone.runOutsideAngular(() => {
      window.addEventListener('scroll', this.onScroll, { passive: true });
      window.addEventListener('resize', this.onResize, { passive: true });

      if (typeof ResizeObserver == 'function') {
        this.resizeObserver = new ResizeObserver(() => {
          this.refresh();
        });

        this.resizeObserver.observe(this.elementRef.nativeElement);
        this.resizeObserver.observe(this.scrollMotionSticky());
        this.resizeObserver.observe(this.scrollMotionViewport());
        this.resizeObserver.observe(this.scrollMotionTrack());
      }

      this.refresh();
    });
  }

  private readonly onScroll = (): void => {
    if (!this.active) {
      return;
    }

    this.scheduleRender();
  };

  private readonly onResize = (): void => {
    this.refresh();
  };

  private refresh(): void {
    const host = this.elementRef.nativeElement;
    const sticky = this.scrollMotionSticky();
    const viewport = this.scrollMotionViewport();
    const track = this.scrollMotionTrack();

    const prefersReducedMotion =
      typeof window.matchMedia == 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const shouldUseNative = prefersReducedMotion || window.innerWidth < this.scrollMotionMinWidth();
    const scrollRange = Math.max(0, track.scrollWidth - viewport.clientWidth);

    if (shouldUseNative || scrollRange <= 0) {
      this.scrollRange = 0;
      this.disable();
      return;
    }

    host.classList.add('scroll-motion--active');
    host.classList.remove('scroll-motion--native');

    const stickyHeight = sticky.offsetHeight;

    if (stickyHeight <= 0) {
      this.scrollRange = 0;
      this.disable();
      return;
    }

    this.activeTopOffset = this.resolveTopOffset(sticky, viewport, track);
    host.style.setProperty('--scroll-motion-top-offset', `${this.activeTopOffset}px`);
    this.scrollRange = scrollRange;
    host.style.height = `${stickyHeight + scrollRange}px`;
    this.active = true;

    this.scheduleRender(true);
  }

  private scheduleRender(force = false): void {
    if (force) {
      this.cancelFrame();
      this.render();
      return;
    }

    if (this.frameId) {
      return;
    }

    this.frameId = window.requestAnimationFrame(() => {
      this.frameId = 0;
      this.render();
    });
  }

  private render(): void {
    if (!this.active || this.scrollRange <= 0) {
      return;
    }

    const host = this.elementRef.nativeElement;
    const track = this.scrollMotionTrack();
    const hostTop = host.getBoundingClientRect().top;
    const progress = Math.min(1, Math.max(0, (this.activeTopOffset - hostTop) / this.scrollRange));
    const offset = progress * this.scrollRange;

    track.style.transform = `translate3d(${-offset}px, 0, 0)`;
    host.style.setProperty('--scroll-motion-progress', progress.toFixed(4));
    host.style.setProperty('--scroll-motion-x', `${offset.toFixed(2)}px`);
  }

  private disable(): void {
    const host = this.elementRef.nativeElement;

    this.cancelFrame();
    this.active = false;
    this.activeTopOffset = 0;

    host.classList.add('scroll-motion--native');
    host.classList.remove('scroll-motion--active');
    host.style.removeProperty('height');
    host.style.setProperty('--scroll-motion-progress', '0');
    host.style.setProperty('--scroll-motion-top-offset', `${this.scrollMotionTopOffset()}px`);
    host.style.setProperty('--scroll-motion-x', '0px');

    this.scrollMotionTrack().style.removeProperty('transform');
    this.scrollMotionViewport().scrollLeft = 0;
  }

  private cancelFrame(): void {
    if (!this.frameId) {
      return;
    }

    window.cancelAnimationFrame(this.frameId);
    this.frameId = 0;
  }

  private teardown(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.cancelFrame();
    this.resizeObserver?.disconnect();
    this.resizeObserver = null;
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onResize);
  }

  private resolveTopOffset(sticky: HTMLElement, viewport: HTMLElement, track: HTMLElement): number {
    const minimumTopOffset = this.scrollMotionTopOffset();
    const stickyRect = sticky.getBoundingClientRect();
    const firstTrackItem = track.firstElementChild as HTMLElement | null;

    if (firstTrackItem) {
      const firstTrackItemRect = firstTrackItem.getBoundingClientRect();

      if (firstTrackItemRect.height > 0) {
        const itemOffsetWithinSticky = Math.max(0, firstTrackItemRect.top - stickyRect.top);
        const centeredOffset =
          window.innerHeight / 2 - itemOffsetWithinSticky - firstTrackItemRect.height / 2;

        return Math.max(minimumTopOffset, Math.round(centeredOffset));
      }
    }

    const viewportHeight = viewport.clientHeight;

    if (viewportHeight <= 0) {
      return minimumTopOffset;
    }

    const viewportRect = viewport.getBoundingClientRect();
    const viewportOffsetWithinSticky = Math.max(0, viewportRect.top - stickyRect.top);
    const centeredOffset = window.innerHeight / 2 - viewportOffsetWithinSticky - viewportHeight / 2;

    return Math.max(minimumTopOffset, Math.round(centeredOffset));
  }
}
