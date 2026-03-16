import { MOTION_EASES, MOTION_MEDIA } from '../../../shared/motion/motion.tokens';
import { setupViewportTilt } from '../../../shared/motion/viewport-tilt';
import { MotionScope } from '../../../shared/services/motion.service';

export const initializeHomePageMotion = (scope: MotionScope): void => {
  setupHeroMotion(scope);
  setupExperienceMotion(scope);
  setupViewportTiltMotion(scope);
};

const setupHeroMotion = ({ gsap, host }: MotionScope): void => {
  const select = gsap.utils.selector(host);
  const section = select<HTMLElement>('.hero')[0];
  const content = select<HTMLElement>('.hero__content')[0];
  const eyebrow = select<HTMLElement>('.hero__eyebrow')[0];
  const titleLines = select<HTMLElement>('.hero__title-line');
  const summary = select<HTMLElement>('.hero__summary')[0];
  const actions = select<HTMLElement>('.hero__actions')[0];
  const note = select<HTMLElement>('.hero__note')[0];
  const portrait = select<HTMLElement>('.hero__portrait')[0];
  const aside = select<HTMLElement>('.hero__aside')[0];

  if (!section || !content || !eyebrow || !summary || !actions || !note || !portrait || !aside) {
    return;
  }

  const actionItems = actions ? gsap.utils.toArray<HTMLElement>(actions.children) : [];

  gsap
    .timeline({
      defaults: {
        ease: MOTION_EASES.hero,
      },
    })
    .set([eyebrow, summary, note, portrait], {
      autoAlpha: 0,
      willChange: 'transform,opacity',
    })
    .set([...titleLines, ...actionItems], {
      willChange: 'transform,opacity',
    })
    .set(titleLines, {
      yPercent: 110,
    })
    .set(actionItems, {
      autoAlpha: 0,
      y: 22,
    })
    .fromTo(
      eyebrow,
      { y: 18 },
      {
        autoAlpha: 1,
        duration: 0.72,
        y: 0,
      },
      0,
    )
    .to(
      titleLines,
      {
        duration: 1.12,
        ease: MOTION_EASES.hero,
        stagger: 0.08,
        yPercent: 0,
      },
      0.08,
    )
    .fromTo(
      summary,
      { y: 24 },
      {
        autoAlpha: 1,
        duration: 0.82,
        y: 0,
      },
      0.28,
    )
    .fromTo(
      actionItems,
      {},
      {
        autoAlpha: 1,
        duration: 0.68,
        stagger: 0.08,
        y: 0,
      },
      0.44,
    )
    .fromTo(
      [note, portrait],
      {
        x: 26,
        y: 24,
        scale: 0.98,
      },
      {
        autoAlpha: 1,
        duration: 0.94,
        stagger: 0.1,
        x: 0,
        y: 0,
        scale: 1,
      },
      0.24,
    )
    .set([eyebrow, summary, note, portrait, ...titleLines, ...actionItems], {
      clearProps: 'opacity,transform,visibility,willChange',
    });

  gsap.timeline({
    scrollTrigger: {
      end: 'bottom top',
      scrub: 0.6,
      trigger: section,
    },
  })
    .to(content, { y: -46 }, 0)
    .to(aside, { y: -62 }, 0)
    .to(note, { rotate: -2 }, 0)
    .to(portrait, { rotate: 3, y: -18 }, 0);
};

const setupExperienceMotion = ({ gsap, host, matchMedia, ScrollTrigger }: MotionScope): void => {
  const select = gsap.utils.selector(host);
  const section = select<HTMLElement>('.experience')[0];
  const intro = select<HTMLElement>('.experience__intro')[0];
  const eyebrow = select<HTMLElement>('.experience__eyebrow')[0];
  const title = select<HTMLElement>('.experience__title')[0];
  const summary = select<HTMLElement>('.experience__summary')[0];
  const railFill = select<HTMLElement>('.experience__rail-fill')[0];
  const cards = select<HTMLElement>('.timeline__item');

  if (!section || !intro || !eyebrow || !title || !summary || !railFill || cards.length == 0) {
    return;
  }

  gsap
    .timeline({
      defaults: {
        ease: MOTION_EASES.scrub,
      },
      scrollTrigger: {
        end: 'top 44%',
        invalidateOnRefresh: true,
        scrub: 0.7,
        start: 'top 86%',
        trigger: section,
      },
    })
    .fromTo(
      eyebrow,
      {
        autoAlpha: 0,
        y: 20,
      },
      {
        autoAlpha: 1,
        duration: 0.2,
        y: 0,
      },
      0,
    )
    .fromTo(
      title,
      {
        autoAlpha: 0,
        y: 34,
      },
      {
        autoAlpha: 1,
        duration: 0.28,
        y: 0,
      },
      0.08,
    )
    .fromTo(
      summary,
      {
        autoAlpha: 0,
        y: 26,
      },
      {
        autoAlpha: 1,
        duration: 0.24,
        y: 0,
      },
      0.16,
    );

  gsap.fromTo(
    railFill,
    {
      scaleX: 0,
      transformOrigin: 'left center',
    },
    {
      ease: MOTION_EASES.scrub,
      scaleX: 1,
      scrollTrigger: {
        end: 'bottom 64%',
        invalidateOnRefresh: true,
        scrub: true,
        start: 'top 76%',
        trigger: section,
      },
    },
  );

  cards.forEach((card, index) => {
    const summaryBlock = card.querySelector<HTMLElement>('.timeline__summary');
    const highlights = card.querySelector<HTMLElement>('.timeline__highlights');
    const itemDelay = index * 0.03;

    gsap
      .timeline({
        defaults: {
          ease: MOTION_EASES.scrub,
        },
        scrollTrigger: {
          end: 'top 48%',
          invalidateOnRefresh: true,
          scrub: 0.75,
          start: 'top 90%',
          trigger: card,
        },
      })
      .fromTo(
        card,
        {
          autoAlpha: 0.16,
          scale: 0.96,
          y: 76,
        },
        {
          autoAlpha: 1,
          duration: 0.34,
          scale: 1,
          y: 0,
        },
        itemDelay,
      )
      .fromTo(
        [summaryBlock, highlights].filter((element): element is HTMLElement => element != null),
        {
          autoAlpha: 0,
          y: 18,
        },
        {
          autoAlpha: 1,
          duration: 0.2,
          stagger: 0.08,
          y: 0,
        },
        itemDelay + 0.1,
      );
  });

  matchMedia.add(MOTION_MEDIA.desktop, () => {
    const pinTrigger = ScrollTrigger.create({
      end: 'bottom bottom-=120',
      invalidateOnRefresh: true,
      pin: intro,
      pinSpacing: false,
      refreshPriority: 1,
      start: 'top top+=120',
      trigger: section,
    });

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return (): void => {
      pinTrigger.kill();
    };
  });
};

const setupViewportTiltMotion = ({ gsap, host, isTouch, matchMedia, ScrollTrigger, prefersReducedMotion }: MotionScope): void => {
  if (prefersReducedMotion) {
    return;
  }

  const select = gsap.utils.selector(host);
  const tiltCards = select<HTMLElement>('[data-viewport-tilt="card"]');
  const tiltProjects = select<HTMLElement>('[data-viewport-tilt="project"]');

  if (tiltCards.length == 0 && tiltProjects.length == 0) {
    return;
  }

  matchMedia.add(MOTION_MEDIA.desktop, (): void | (() => void) => {
    if (isTouch) {
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
        tiltProjects,
        {
          duration: 0.5,
          perspective: 1500,
          rotateX: 9,
          rotateY: 13.5,
        },
      ),
    ].filter((value): value is () => void => typeof value == 'function');

    return (): void => {
      cleanup.forEach((dispose) => dispose());
    };
  });
};
