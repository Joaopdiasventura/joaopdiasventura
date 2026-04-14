import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  OnDestroy,
  PLATFORM_ID,
  signal,
  viewChild,
} from '@angular/core';
import { CASE_STUDY_SLUGS } from '../../../../core/data/case-study-previews.data';
import { PROJECTS_SECTION_DATA } from '../../../../core/data/projects-section.data';
import { CaseStudySlug } from '../../../../core/models/portfolio.model';
import { LanguageService } from '../../../../core/services/language/language.service';
import { ContentSectionHeading } from '../../../../shared/components/content/content-section-heading/content-section-heading';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll/reveal-on-scroll.directive';
import { ScrollMotionDirective } from '../../../../shared/directives/scroll-motion/scroll-motion.directive';
import { ViewportTiltDirective } from '../../../../shared/directives/viewport-tilt/viewport-tilt.directive';
import {
  ProjectCard,
  ProjectCardViewModel,
} from './cards/project-card/project-card';

type ProjectsSectionProject = (typeof PROJECTS_SECTION_DATA.projects)[number];

const PROJECT_SCROLL_BREAKPOINT = 0;
const PROJECT_SCROLL_TOP_OFFSET = 84;
const PROJECT_CARD_IMAGE_SIZES = '(max-width: 959px) 92vw, 36rem';
const PROJECT_CARD_IMAGE_SRCSET = '640w, 960w, 1280w';
const PROJECT_STACK_LIMIT = 3;

@Component({
  selector: 'app-projects-section',
  imports: [
    ContentSectionHeading,
    ProjectCard,
    RevealOnScrollDirective,
    ScrollMotionDirective,
    ViewportTiltDirective,
  ],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSection implements AfterViewInit, OnDestroy {
  public readonly content = PROJECTS_SECTION_DATA;
  public readonly imageSizes = PROJECT_CARD_IMAGE_SIZES;
  public readonly imageSrcset = PROJECT_CARD_IMAGE_SRCSET;
  public readonly projectImagesReady = signal(false);
  public readonly projectCards = computed<readonly ProjectCardViewModel[]>(() =>
    this.content.projects.map((project, index) => ({
      caseActionLabel: this.copy(this.labels.caseCta),
      caseRoute: this.projectCaseRoute(project.slug),
      category: this.copy(project.category),
      coverAlt: this.copy(project.cover.alt),
      coverSrc: project.cover.src,
      coverSrcset: this.imageSrcset,
      imageSizes: this.imageSizes,
      iconHeight: project.icon.height,
      iconSrc: project.icon.src,
      iconWidth: project.icon.width,
      imagesReady: this.projectImagesReady(),
      indexLabel: `0${index + 1}`,
      metric: this.projectPrimaryMetric(project),
      name: this.copy(project.name),
      primaryActionHref: this.projectPrimaryHref(project),
      primaryActionLabel: this.copy(this.projectPrimaryLabel(project)),
      problem: this.copy(project.problem),
      problemLabel: this.copy(this.labels.problem),
      resultLabel: this.copy(this.labels.result),
      solution: this.copy(project.solution),
      solutionLabel: this.copy(this.labels.solution),
      stackLabel: this.copy(this.labels.stack),
      stackSummary: this.projectStackSummary(project),
      theme: project.slug,
      titleId: `project-${project.slug}-title`,
    })),
  );
  public readonly scrollMinWidth = PROJECT_SCROLL_BREAKPOINT;
  public readonly scrollTopOffset = PROJECT_SCROLL_TOP_OFFSET;
  public readonly labels = {
    desktopHint: {
      en: 'Scroll to browse the project rail.',
      pt: 'Role para percorrer o trilho de projetos.',
    },
    mobileHint: {
      en: 'Scroll to browse the project rail.',
      pt: 'Role para percorrer o trilho de projetos.',
    },
    caseCta: {
      en: 'Open case study',
      pt: 'Abrir estudo de caso',
    },
    liveCta: {
      en: 'Open live project',
      pt: 'Abrir projeto online',
    },
    repositoryCta: {
      en: 'View repository',
      pt: 'Ver repositório',
    },
    problem: {
      en: 'Problem',
      pt: 'Problema',
    },
    solution: {
      en: 'Solution',
      pt: 'Solução',
    },
    result: {
      en: 'Result',
      pt: 'Resultado',
    },
    stack: {
      en: 'Stack',
      pt: 'Stack',
    },
  } as const;

  private readonly languageService = inject(LanguageService);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly sectionRef = viewChild.required<ElementRef<HTMLElement>>('sectionRoot');

  private observer: IntersectionObserver | null = null;
  private visibilityCleanup: (() => void) | null = null;

  public ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const section = this.sectionRef().nativeElement;

    if (this.supportsObserver()) {
      this.observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry?.isIntersecting) return;

          this.markProjectImagesReady();
        },
        {
          threshold: 0.01,
        },
      );

      this.observer.observe(section);
    }

    this.startVisibilityTracking(section);
  }

  public ngOnDestroy(): void {
    this.destroyObserver();
    this.destroyVisibilityTracking();
  }

  public copy<T>(value: { en: T; pt: T }): T {
    return this.languageService.copy(value);
  }

  public projectCaseRoute(slug: ProjectsSectionProject['slug']): readonly string[] | null {
    return CASE_STUDY_SLUGS.has(slug)
      ? this.languageService.caseRoute(slug as CaseStudySlug)
      : null;
  }

  public projectPrimaryHref(project: ProjectsSectionProject): string {
    return project.liveUrl ?? project.repositories[0]?.href ?? '#';
  }

  public projectPrimaryLabel(project: ProjectsSectionProject): { en: string; pt: string } {
    return project.liveUrl ? this.labels.liveCta : this.labels.repositoryCta;
  }

  public projectPrimaryMetric(
    project: ProjectsSectionProject,
  ): ProjectCardViewModel['metric'] {
    const metric = project.metrics[0];

    return metric
      ? {
          label: this.copy(metric.label),
          value: metric.value,
        }
      : null;
  }

  public projectStackSummary(project: ProjectsSectionProject): string {
    return project.stack.slice(0, PROJECT_STACK_LIMIT).join(' · ');
  }

  private markProjectImagesReady(): void {
    if (this.projectImagesReady()) return;

    this.projectImagesReady.set(true);
    this.destroyObserver();
    this.destroyVisibilityTracking();
  }

  private startVisibilityTracking(section: HTMLElement): void {
    const checkVisibility = (): void => {
      if (this.isInViewport(section)) this.markProjectImagesReady();
    };

    const onScroll = (): void => checkVisibility();
    const onResize = (): void => checkVisibility();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    this.visibilityCleanup = (): void => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      this.visibilityCleanup = null;
    };

    if (typeof window.requestAnimationFrame == 'function') {
      window.requestAnimationFrame(() => {
        checkVisibility();
      });
      return;
    }

    checkVisibility();
  }

  private destroyObserver(): void {
    this.observer?.disconnect();
    this.observer = null;
  }

  private destroyVisibilityTracking(): void {
    this.visibilityCleanup?.();
  }

  private isInViewport(element: HTMLElement): boolean {
    const bounds = element.getBoundingClientRect();

    return (
      bounds.bottom > 0 &&
      bounds.right > 0 &&
      bounds.top < window.innerHeight &&
      bounds.left < window.innerWidth
    );
  }

  private supportsObserver(): boolean {
    return typeof IntersectionObserver == 'function';
  }
}
