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
  private static readonly INITIAL_PROGRESS = '0';

  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly zone = inject(NgZone);
  private readonly destroyRef = inject(DestroyRef);

  private resizeObserver: ResizeObserver | null = null;
  private frameId = 0;
  private refreshFrameId = 0;
  private scrollRange = 0;
  private active = false;
  private activeTopOffset = 0;
  private hostDocumentTop = 0;
  private lastProgress = ScrollMotionDirective.INITIAL_PROGRESS;
  private lastTransform = '';

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

      if (typeof ResizeObserver == 'function') {
        this.resizeObserver = new ResizeObserver(() => {
          this.scheduleRefresh();
        });

        this.resizeObserver.observe(this.elementRef.nativeElement);
        this.resizeObserver.observe(this.scrollMotionSticky());
        this.resizeObserver.observe(this.scrollMotionViewport());
        this.resizeObserver.observe(this.scrollMotionTrack());
      } else {
        window.addEventListener('resize', this.onResize, { passive: true });
      }

      this.scheduleRefresh(true);
    });
  }

  private readonly onScroll = (): void => {
    if (!this.active) {
      return;
    }

    this.scheduleRender();
  };

  private readonly onResize = (): void => {
    this.scheduleRefresh();
  };

  private scheduleRefresh(force = false): void {
    if (force) {
      this.cancelRefreshFrame();
      this.refresh();
      return;
    }

    if (this.refreshFrameId) {
      return;
    }

    this.refreshFrameId = window.requestAnimationFrame(() => {
      this.refreshFrameId = 0;
      this.refresh();
    });
  }

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

    const stickyHeight = sticky.offsetHeight;

    if (stickyHeight <= 0) {
      this.scrollRange = 0;
      this.disable();
      return;
    }

    const activeTopOffset = this.resolveTopOffset(sticky, viewport, track);
    const hostDocumentTop = host.getBoundingClientRect().top + window.scrollY;
    const hostHeight = `${stickyHeight + scrollRange}px`;

    host.classList.add('scroll-motion--active');
    host.classList.remove('scroll-motion--native');

    this.activeTopOffset = activeTopOffset;
    this.hostDocumentTop = hostDocumentTop;
    host.style.setProperty('--scroll-motion-top-offset', `${activeTopOffset}px`);
    this.scrollRange = scrollRange;
    host.style.height = hostHeight;
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

    const track = this.scrollMotionTrack();
    const host = this.elementRef.nativeElement;
    const scrollStart = this.hostDocumentTop - this.activeTopOffset;
    const progress = Math.min(
      1,
      Math.max(0, (window.scrollY - scrollStart) / this.scrollRange),
    );
    const offset = progress * this.scrollRange;
    const progressValue = progress.toFixed(4);
    const transformValue = `translate3d(${-offset.toFixed(2)}px, 0, 0)`;

    if (transformValue != this.lastTransform) {
      track.style.transform = transformValue;
      this.lastTransform = transformValue;
    }

    if (progressValue != this.lastProgress) {
      host.style.setProperty('--scroll-motion-progress', progressValue);
      this.lastProgress = progressValue;
    }
  }

  private disable(): void {
    const host = this.elementRef.nativeElement;

    this.cancelFrame();
    this.cancelRefreshFrame();
    this.active = false;
    this.activeTopOffset = 0;
    this.hostDocumentTop = 0;
    this.lastProgress = ScrollMotionDirective.INITIAL_PROGRESS;
    this.lastTransform = '';

    host.classList.add('scroll-motion--native');
    host.classList.remove('scroll-motion--active');
    host.style.removeProperty('height');
    host.style.setProperty('--scroll-motion-progress', ScrollMotionDirective.INITIAL_PROGRESS);
    host.style.setProperty('--scroll-motion-top-offset', `${this.scrollMotionTopOffset()}px`);

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

  private cancelRefreshFrame(): void {
    if (!this.refreshFrameId) {
      return;
    }

    window.cancelAnimationFrame(this.refreshFrameId);
    this.refreshFrameId = 0;
  }

  private teardown(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.cancelFrame();
    this.cancelRefreshFrame();
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
