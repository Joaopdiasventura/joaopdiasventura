import { MOTION_EASES, MOTION_MEDIA } from '../../../shared/motion/motion.tokens';
import { setupViewportTilt } from '../../../shared/motion/viewport-tilt';
import { MotionScope } from '../../../shared/services/motion.service';

export const initializeCaseStudyPageMotion = ({
  gsap,
  host,
  isTouch,
  matchMedia,
  prefersReducedMotion,
  ScrollTrigger,
}: MotionScope): void => {
  const select = gsap.utils.selector(host);
  const hero = select<HTMLElement>('.case-study__hero')[0];
  const heroCopy = select<HTMLElement>('.case-study__hero-copy')[0];
  const heroTitle = select<HTMLElement>('.case-study__hero-title')[0];
  const heroSummary = select<HTMLElement>('.case-study__hero-summary')[0];
  const heroMeta = select<HTMLElement>('.case-study__meta-card');
  const mediaStage = select<HTMLElement>('.case-study__media-stage')[0];
  const mediaPanels = select<HTMLElement>('.case-study__media-panel');
  const decisionCards = select<HTMLElement>('.case-study__decision');
  const tiltCards = select<HTMLElement>('[data-viewport-tilt="card"]');
  const tiltFeatures = select<HTMLElement>('[data-viewport-tilt="feature"]');
  const resultItems = select<HTMLElement>('.case-study__results li');

  if (!hero || !heroCopy || !heroTitle || !heroSummary || !mediaStage) {
    return;
  }

  gsap
    .timeline({
      defaults: {
        ease: MOTION_EASES.hero,
      },
    })
    .fromTo(
      [heroTitle, heroSummary, ...heroMeta],
      {
        autoAlpha: 0,
        y: 28,
      },
      {
        autoAlpha: 1,
        duration: 0.92,
        stagger: 0.08,
        y: 0,
      },
    );

  gsap.timeline({
    scrollTrigger: {
      end: 'bottom top',
      scrub: 0.6,
      start: 'top top',
      trigger: hero,
    },
  })
    .to(heroCopy, { y: -36 }, 0)
    .to(mediaStage, { y: -60, scale: 0.96 }, 0);

  gsap.fromTo(
    mediaPanels,
    {
      autoAlpha: 0,
      y: 34,
    },
    {
      autoAlpha: 1,
      duration: 0.7,
      ease: MOTION_EASES.enter,
      stagger: 0.08,
      y: 0,
      scrollTrigger: {
        start: 'top 80%',
        trigger: mediaStage,
      },
    },
  );

  decisionCards.forEach((card) => {
    gsap.fromTo(
      card,
      {
        autoAlpha: 0.18,
        y: 56,
      },
      {
        autoAlpha: 1,
        ease: MOTION_EASES.scrub,
        y: 0,
        scrollTrigger: {
          end: 'top 40%',
          scrub: true,
          start: 'top 88%',
          trigger: card,
        },
      },
    );

    const inner = card.querySelectorAll<HTMLElement>('h3, p');
    gsap.fromTo(
      inner,
      {
        autoAlpha: 0,
        y: 22,
      },
      {
        autoAlpha: 1,
        duration: 0.58,
        ease: MOTION_EASES.enter,
        stagger: 0.04,
        y: 0,
        scrollTrigger: {
          start: 'top 72%',
          trigger: card,
        },
      },
    );
  });

  gsap.fromTo(
    resultItems,
    {
      autoAlpha: 0,
      x: -24,
    },
    {
      autoAlpha: 1,
      duration: 0.64,
      ease: MOTION_EASES.enter,
      stagger: 0.08,
      x: 0,
      scrollTrigger: {
        start: 'top 76%',
        trigger: resultItems[0],
      },
    },
  );

  matchMedia.add(MOTION_MEDIA.desktop, (): void | (() => void) => {
    const stageFrame = mediaStage.querySelector<HTMLElement>('.case-study__media-frame');
    if (!stageFrame) {
      return;
    }

    gsap.to(stageFrame, {
      rotateX: 4,
      rotateY: -6,
      scrollTrigger: {
        end: 'bottom top',
        scrub: true,
        start: 'top bottom',
        trigger: mediaStage,
      },
      transformPerspective: 1200,
    });

    if (isTouch || prefersReducedMotion) {
      return;
    }

    const cleanup = [
      setupViewportTilt(
        {
          gsap,
          host,
          ScrollTrigger,
          isTouch,
          matchMedia,
          prefersReducedMotion,
        },
        tiltCards,
        {
          perspective: 1320,
          rotateX: 7,
          rotateY: 10.5,
        },
      ),
      setupViewportTilt(
        {
          gsap,
          host,
          ScrollTrigger,
          isTouch,
          matchMedia,
          prefersReducedMotion,
        },
        tiltFeatures,
        {
          perspective: 1400,
          rotateX: 10,
          rotateY: 14,
        },
      ),
    ].filter((value): value is () => void => typeof value == 'function');

    return (): void => {
      cleanup.forEach((dispose) => dispose());
    };
  });
};
