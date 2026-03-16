import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CASE_STUDY_PREVIEWS } from '../../../../core/data/case-study-previews.data';
import { FEATURED_WORK_CONTENT } from '../../../../core/data/portfolio.data';
import {
  CaseStudyLink,
  CaseStudyMetric,
  CaseStudyPreview,
  CaseStudySlug,
} from '../../../../core/models/portfolio.model';
import { LanguageService } from '../../../../core/services/language.service';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';
import { ViewportTiltDirective } from '../../../../shared/directives/viewport-tilt.directive';

interface ProjectPreview {
  readonly slug: CaseStudySlug;
  readonly theme: CaseStudyPreview['theme'];
  readonly name: CaseStudyPreview['name'];
  readonly category: CaseStudyPreview['category'];
  readonly year: CaseStudyPreview['year'];
  readonly teaser: CaseStudyPreview['teaser'];
  readonly previewMetrics: readonly CaseStudyMetric[];
  readonly previewStack: readonly string[];
  readonly liveLink: CaseStudyLink | null;
}

const PROJECT_PREVIEW_LIMITS = {
  metrics: 2,
  stack: 3,
} as const;

const PROJECT_ICON_DIMENSIONS: Readonly<Record<CaseStudySlug, { readonly width: number; readonly height: number }>> = {
  vox: { width: 24, height: 30 },
  etecfy: { width: 24, height: 24 },
} as const;

const toProjectPreview = (caseStudy: CaseStudyPreview): ProjectPreview => ({
  slug: caseStudy.slug,
  theme: caseStudy.theme,
  name: caseStudy.name,
  category: caseStudy.category,
  year: caseStudy.year,
  teaser: caseStudy.teaser,
  previewMetrics: caseStudy.metrics.slice(0, PROJECT_PREVIEW_LIMITS.metrics),
  previewStack: caseStudy.stack.slice(0, PROJECT_PREVIEW_LIMITS.stack),
  liveLink: caseStudy.links[0] ?? null,
});

@Component({
  selector: 'app-projects-section',
  imports: [NgOptimizedImage, RouterLink, RevealOnScrollDirective, ViewportTiltDirective],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSection {
  public readonly content = FEATURED_WORK_CONTENT;
  public readonly projectPreviews = CASE_STUDY_PREVIEWS.map(toProjectPreview);
  private readonly languageService = inject(LanguageService);

  public copy<T>(value: { en: T; pt: T }): T {
    return this.languageService.copy(value);
  }

  public caseRoute(slug: CaseStudySlug): readonly string[] {
    return this.languageService.caseRoute(slug);
  }

  public iconPath(slug: CaseStudySlug): string {
    return `/assets/projects/icons/${slug}.svg`;
  }

  public iconDimensions(slug: CaseStudySlug): { width: number; height: number } {
    return PROJECT_ICON_DIMENSIONS[slug];
  }
}
