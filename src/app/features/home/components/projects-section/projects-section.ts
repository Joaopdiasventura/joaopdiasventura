import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CASE_STUDY_SLUGS } from '../../../../core/data/case-study-previews.data';
import { PROJECTS_SECTION_DATA } from '../../../../core/data/projects-section.data';
import { CaseStudyMetric, CaseStudySlug } from '../../../../core/models/portfolio.model';
import { LanguageService } from '../../../../core/services/language.service';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';
import { ScrollMotionDirective } from '../../../../shared/directives/scroll-motion.directive';

type ProjectCard = (typeof PROJECTS_SECTION_DATA.projects)[number];

const PROJECT_SCROLL_BREAKPOINT = 0;
const PROJECT_SCROLL_TOP_OFFSET = 84;
const PROJECT_CARD_IMAGE_SIZES = '(max-width: 959px) 92vw, 36rem';
const PROJECT_HOME_LIMITS = {
  highlights: 2,
  metrics: 2,
  stack: 3,
} as const;

@Component({
  selector: 'app-projects-section',
  imports: [NgOptimizedImage, RouterLink, RevealOnScrollDirective, ScrollMotionDirective],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSection {
  public readonly content = PROJECTS_SECTION_DATA;
  public readonly imageSizes = PROJECT_CARD_IMAGE_SIZES;
  public readonly scrollMinWidth = PROJECT_SCROLL_BREAKPOINT;
  public readonly scrollTopOffset = PROJECT_SCROLL_TOP_OFFSET;
  public readonly labels = {
    desktopHint: {
      en: 'Scroll vertically to move across the project rail.',
      pt: 'Role verticalmente para atravessar o trilho de projetos.',
    },
    mobileHint: {
      en: 'Scroll vertically to move across the project rail.',
      pt: 'Role verticalmente para atravessar o trilho de projetos.',
    },
    caseCta: {
      en: 'Open case study',
      pt: 'Abrir case study',
    },
    liveCta: {
      en: 'Open live project',
      pt: 'Abrir projeto online',
    },
    repositoryCta: {
      en: 'View repository',
      pt: 'Ver repositorio',
    },
    highlights: {
      en: 'Highlights',
      pt: 'Destaques',
    },
    proof: {
      en: 'Proof points',
      pt: 'Sinais de prova',
    },
  } as const;

  private readonly languageService = inject(LanguageService);

  public copy<T>(value: { en: T; pt: T }): T {
    return this.languageService.copy(value);
  }

  public copyList(value: {
    en: readonly string[];
    pt: readonly string[];
  }): readonly string[] {
    return value[this.languageService.language()];
  }

  public caseRoute(slug: CaseStudySlug): readonly string[] {
    return this.languageService.caseRoute(slug);
  }

  public projectCaseRoute(slug: ProjectCard['slug']): readonly string[] | null {
    return CASE_STUDY_SLUGS.has(slug)
      ? this.languageService.caseRoute(slug as CaseStudySlug)
      : null;
  }

  public projectPrimaryHref(project: ProjectCard): string {
    return project.liveUrl ?? project.repositories[0]?.href ?? '#';
  }

  public projectPrimaryLabel(project: ProjectCard): { en: string; pt: string } {
    return project.liveUrl ? this.labels.liveCta : this.labels.repositoryCta;
  }

  public projectHighlights(project: ProjectCard): readonly string[] {
    return this.copyList(project.highlights).slice(0, PROJECT_HOME_LIMITS.highlights);
  }

  public projectMetrics(project: ProjectCard): readonly CaseStudyMetric[] {
    return project.metrics.slice(0, PROJECT_HOME_LIMITS.metrics);
  }

  public projectStack(project: ProjectCard): readonly string[] {
    return project.stack.slice(0, PROJECT_HOME_LIMITS.stack);
  }
}
