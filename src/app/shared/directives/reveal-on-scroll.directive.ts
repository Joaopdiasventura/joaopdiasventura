import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  DestroyRef,
  Directive,
  ElementRef,
  inject,
  input,
  OnDestroy,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appRevealOnScroll]',
  host: {
    class: 'reveal-on-scroll',
    '[style.--reveal-delay]': "delayMs() + 'ms'",
  },
})
export class RevealOnScrollDirective implements AfterViewInit, OnDestroy {
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly renderer = inject(Renderer2);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);

  private observer: IntersectionObserver | undefined;

  public readonly delayMs = input(0);

  public ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId))
      return this.renderer.addClass(this.elementRef.nativeElement, 'is-visible');

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;

          this.renderer.addClass(this.elementRef.nativeElement, 'is-visible');
          this.observer?.disconnect();
          break;
        }
      },
      {
        rootMargin: '0px 0px -80px 0px',
        threshold: 0.1,
      },
    );

    this.observer.observe(this.elementRef.nativeElement);
    this.destroyRef.onDestroy(() => this.observer?.disconnect());
  }

  public ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}

