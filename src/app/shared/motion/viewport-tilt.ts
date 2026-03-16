import { MOTION_EASES } from './motion.tokens';
import { MotionCleanup, MotionScope } from '../services/motion.service';

export interface ViewportTiltOptions {
  readonly duration?: number;
  readonly end?: string;
  readonly perspective?: number;
  readonly rotateX?: number;
  readonly rotateY?: number;
  readonly start?: string;
}

interface TiltTarget {
  readonly element: HTMLElement;
  readonly reset: () => void;
  readonly updateX: (value: number) => void;
  readonly updateY: (value: number) => void;
  active: boolean;
  trigger: ReturnType<MotionScope['ScrollTrigger']['create']> | null;
}

const DEFAULT_VIEWPORT_TILT: Required<ViewportTiltOptions> = {
  duration: 0.45,
  end: 'bottom top',
  perspective: 1400,
  rotateX: 5,
  rotateY: 7,
  start: 'top bottom',
};

export const setupViewportTilt = (
  { gsap, ScrollTrigger, isTouch }: MotionScope,
  elements: readonly HTMLElement[],
  options: ViewportTiltOptions = {},
): MotionCleanup | void => {
  if (isTouch || elements.length == 0 || typeof window === 'undefined') {
    return;
  }

  const settings = {
    ...DEFAULT_VIEWPORT_TILT,
    ...options,
  };

  const targets = elements.map<TiltTarget>((element) => {
    gsap.set(element, {
      force3D: true,
      transformOrigin: 'center center',
      transformPerspective: settings.perspective,
      transformStyle: 'preserve-3d',
      willChange: 'transform',
    });

    const updateX = gsap.quickTo(element, 'rotationX', {
      duration: settings.duration,
      ease: MOTION_EASES.enter,
    });
    const updateY = gsap.quickTo(element, 'rotationY', {
      duration: settings.duration,
      ease: MOTION_EASES.enter,
    });
    const reset = (): void => {
      updateX(0);
      updateY(0);
    };

    const target: TiltTarget = {
      active: false,
      element,
      reset,
      trigger: null,
      updateX,
      updateY,
    };

    target.trigger = ScrollTrigger.create({
      end: settings.end,
      onToggle: (self): void => {
        target.active = self.isActive;

        if (!target.active) {
          target.reset();
        }
      },
      start: settings.start,
      trigger: element,
    });

    target.active = target.trigger.isActive;

    return target;
  });

  const handlePointerMove = (event: PointerEvent): void => {
    if (event.pointerType == 'touch' || window.innerWidth <= 0 || window.innerHeight <= 0) {
      return;
    }

    const activeTargets = targets.filter((target) => target.active);
    if (activeTargets.length == 0) {
      return;
    }

    const offsetX = event.clientX / window.innerWidth - 0.5;
    const offsetY = event.clientY / window.innerHeight - 0.5;

    activeTargets.forEach((target) => {
      target.updateX(offsetY * -settings.rotateX);
      target.updateY(offsetX * settings.rotateY);
    });
  };

  const resetAll = (): void => {
    targets.forEach((target) => target.reset());
  };

  window.addEventListener('pointermove', handlePointerMove, { passive: true });
  window.addEventListener('blur', resetAll);

  return (): void => {
    window.removeEventListener('pointermove', handlePointerMove);
    window.removeEventListener('blur', resetAll);

    targets.forEach((target) => {
      target.trigger?.kill();
      target.reset();
      gsap.killTweensOf(target.element);
    });
  };
};
