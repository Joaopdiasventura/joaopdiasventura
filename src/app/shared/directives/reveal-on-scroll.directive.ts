import { AfterViewInit, Directive, ElementRef, inject, input, OnDestroy } from '@angular/core';
import { MotionRevealPreset, MOTION_REVEAL_PRESETS } from '../motion/motion.tokens';
import { MotionCleanup, MotionService } from '../services/motion.service';

@Directive({
  selector: '[appRevealOnScroll]',
  host: { class: 'reveal-on-scroll' },
})
export class RevealOnScrollDirective implements AfterViewInit, OnDestroy {
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly motionService = inject(MotionService);

  private cleanup: MotionCleanup = () => undefined;

  public readonly delayMs = input(0);
  public readonly once = input(true);
  public readonly preset = input<MotionRevealPreset>('card');

  public ngAfterViewInit(): void {
    if (!this.motionService.motionEnabled()) {
      return;
    }

    void this.initializeMotion();
  }

  public ngOnDestroy(): void {
    this.cleanup();
  }

  private async initializeMotion(): Promise<void> {
    const element = this.elementRef.nativeElement;
    const preset = MOTION_REVEAL_PRESETS[this.preset()];
    const axisTransform = preset.axis == 'x' ? { x: preset.distance } : { y: preset.distance };

    this.cleanup = await this.motionService.animate(element, ({ gsap }) => {
      gsap.fromTo(
        element,
        {
          autoAlpha: 0,
          filter: `blur(${preset.blur}px)`,
          scale: preset.scale,
          willChange: 'transform,opacity,filter',
          ...axisTransform,
        },
        {
          autoAlpha: 1,
          clearProps: 'filter,opacity,transform,visibility,willChange',
          delay: this.delayMs() / 1000,
          duration: preset.duration,
          ease: preset.ease,
          filter: 'blur(0px)',
          scale: 1,
          x: 0,
          y: 0,
          scrollTrigger: {
            fastScrollEnd: true,
            once: this.once(),
            start: preset.start,
            trigger: element,
          },
        },
      );
    });
  }
}
