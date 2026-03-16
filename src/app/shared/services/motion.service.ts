import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, Injectable, NgZone, PLATFORM_ID, signal } from '@angular/core';

type GsapInstance = typeof import('gsap')['gsap'];
type ScrollTriggerInstance = typeof import('gsap/ScrollTrigger')['ScrollTrigger'];

interface MotionModules {
  readonly gsap: GsapInstance;
  readonly ScrollTrigger: ScrollTriggerInstance;
}

export interface MotionScope {
  readonly gsap: GsapInstance;
  readonly host: Element;
  readonly ScrollTrigger: ScrollTriggerInstance;
  readonly isTouch: boolean;
  readonly matchMedia: ReturnType<GsapInstance['matchMedia']>;
  readonly prefersReducedMotion: boolean;
}

export type MotionCleanup = () => void;

const TOUCH_VALUES = new Set([1, 2, 3]);

@Injectable({ providedIn: 'root' })
export class MotionService {
  private readonly document = inject(DOCUMENT);
  private readonly ngZone = inject(NgZone);
  private readonly platformId = inject(PLATFORM_ID);

  private readonly isBrowser = isPlatformBrowser(this.platformId);
  private readonly reducedMotion = signal(false);

  private modulesPromise: Promise<MotionModules> | null = null;

  public constructor() {
    if (this.isBrowser) {
      this.bindReducedMotionPreference();
    }
  }

  public motionEnabled(): boolean {
    return this.isBrowser && !this.reducedMotion();
  }

  public async animate(host: Element, build: (scope: MotionScope) => void): Promise<MotionCleanup> {
    if (!this.motionEnabled()) {
      return () => undefined;
    }

    const { gsap, ScrollTrigger } = await this.loadModules();

    return this.ngZone.runOutsideAngular(() => {
      this.document.documentElement.classList.add('motion-enabled');

      const matchMedia = gsap.matchMedia();
      const context = gsap.context(() => {
        build({
          gsap,
          host,
          ScrollTrigger,
          isTouch: TOUCH_VALUES.has(ScrollTrigger.isTouch as number),
          matchMedia,
          prefersReducedMotion: this.reducedMotion(),
        });
      }, host);

      this.scheduleRefresh(ScrollTrigger);

      return () => {
        matchMedia.revert();
        context.revert();
      };
    });
  }

  public async refresh(): Promise<void> {
    if (!this.motionEnabled()) {
      return;
    }

    const { ScrollTrigger } = await this.loadModules();
    this.ngZone.runOutsideAngular(() => {
      this.scheduleRefresh(ScrollTrigger);
    });
  }

  private bindReducedMotionPreference(): void {
    if (typeof window.matchMedia !== 'function') {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.reducedMotion.set(mediaQuery.matches);

    const syncPreference = (event: MediaQueryListEvent): void => {
      this.reducedMotion.set(event.matches);
    };

    if (typeof mediaQuery.addEventListener == 'function') {
      mediaQuery.addEventListener('change', syncPreference);
      return;
    }

    mediaQuery.addListener(syncPreference);
  }

  private async loadModules(): Promise<MotionModules> {
    if (this.modulesPromise) {
      return this.modulesPromise;
    }

    this.modulesPromise = Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(
      ([gsapModule, scrollTriggerModule]) => {
        const gsap = gsapModule.gsap;
        const ScrollTrigger = scrollTriggerModule.ScrollTrigger;

        gsap.registerPlugin(ScrollTrigger);

        return {
          gsap,
          ScrollTrigger,
        };
      },
    );

    return this.modulesPromise;
  }

  private scheduleRefresh(ScrollTrigger: ScrollTriggerInstance): void {
    if (typeof requestAnimationFrame == 'function') {
      requestAnimationFrame(() => ScrollTrigger.refresh());
      return;
    }

    ScrollTrigger.refresh();
  }
}
