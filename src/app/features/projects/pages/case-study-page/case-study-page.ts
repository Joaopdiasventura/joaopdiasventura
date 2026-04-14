import { DOCUMENT, isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  PLATFORM_ID,
  computed,
  effect,
  inject,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { CASE_STUDIES } from '../../../../core/data/case-studies.data';
import { CASE_STUDY_PREVIEWS } from '../../../../core/data/case-study-previews.data';
import { PROJECTS_SECTION_DATA } from '../../../../core/data/projects-section.data';
import { FEATURED_PROJECTS_CONTENT } from '../../../../core/data/portfolio.data';
import { CaseStudySlug } from '../../../../core/models/portfolio.model';
import { LanguageService } from '../../../../core/services/language/language.service';
import { BrandScene } from '../../../../shared/components/brand-scene/brand-scene';
import {
  ContentMetaItem,
  ContentMetaList,
} from '../../../../shared/components/content/content-meta-list/content-meta-list';
import {
  ContentMetricItem,
  ContentMetricList,
} from '../../../../shared/components/content/content-metric-list/content-metric-list';
import { ContentTextList } from '../../../../shared/components/content/content-text-list/content-text-list';
import { UiButton } from '../../../../shared/components/ui/ui-button/ui-button';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll/reveal-on-scroll.directive';
import { ViewportTiltDirective } from '../../../../shared/directives/viewport-tilt/viewport-tilt.directive';
import { CaseStudyPanel } from '../../components/case-study-panel/case-study-panel';

type ShowcaseProject = (typeof PROJECTS_SECTION_DATA.projects)[number];

const DEFAULT_CASE_SHOWCASE =
  PROJECTS_SECTION_DATA.projects.find((project) => project.slug == 'vox') ??
  PROJECTS_SECTION_DATA.projects[0];
const CASE_STUDY_METRICS_TEMPLATE = 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))';

@Component({
  selector: 'app-case-study-page',
  imports: [
    BrandScene,
    CaseStudyPanel,
    ContentMetaList,
    ContentMetricList,
    ContentTextList,
    NgOptimizedImage,
    RevealOnScrollDirective,
    UiButton,
    ViewportTiltDirective,
  ],
  templateUrl: './case-study-page.html',
  styleUrl: './case-study-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaseStudyPage {
  public readonly projectsCopy = FEATURED_PROJECTS_CONTENT;
  public readonly caseStudyMetricsTemplate = CASE_STUDY_METRICS_TEMPLATE;
  public readonly labels = {
    back: { en: 'Back to projects', pt: 'Voltar aos projetos' },
    problem: { en: 'Problem', pt: 'Problema' },
    solution: { en: 'Solution', pt: 'Solução' },
    result: { en: 'Result', pt: 'Resultado' },
    role: { en: 'Role', pt: 'Papel' },
    timeline: { en: 'Context', pt: 'Contexto' },
    stack: { en: 'Stack', pt: 'Stack' },
    constraints: { en: 'Constraints', pt: 'Restrições' },
    decisions: { en: 'Decisions', pt: 'Decisões' },
    proof: { en: 'Proof', pt: 'Prova' },
    nextCase: { en: 'Next case study', pt: 'Próximo estudo de caso' },
  } as const;

  private readonly route = inject(ActivatedRoute);
  private readonly languageService = inject(LanguageService);
  private readonly titleService = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  private readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug') as CaseStudySlug | null)),
    { initialValue: null },
  );

  public readonly caseStudy = computed(() => {
    const slug = this.slug();
    return CASE_STUDIES.find((item) => item.slug == slug) ?? CASE_STUDIES[0];
  });

  public readonly showcaseProject = computed(() => {
    const study = this.caseStudy();
    return (
      PROJECTS_SECTION_DATA.projects.find((project) => project.slug == study.slug) ??
      DEFAULT_CASE_SHOWCASE
    );
  });

  public readonly nextCaseStudy = computed(() => {
    const current = this.caseStudy();
    const currentIndex = CASE_STUDIES.findIndex((item) => item.slug == current.slug);
    return CASE_STUDIES[(currentIndex + 1) % CASE_STUDIES.length];
  });

  public readonly actionLinks = computed(() =>
    this.caseStudy().links.map((link) => ({
      href: link.href,
      label: this.copy(link.label),
    })),
  );

  public readonly heroMetrics = computed<readonly ContentMetricItem[]>(() =>
    this.caseStudy().metrics.map((metric) => ({
      label: this.copy(metric.label),
      value: metric.value,
    })),
  );

  public readonly caseStudyFacts = computed<readonly ContentMetaItem[]>(() => {
    const study = this.caseStudy();
    const showcase = this.showcaseProject();

    return [
      {
        label: this.copy(this.labels.role),
        value: this.copy(study.role),
      },
      {
        label: this.copy(this.labels.timeline),
        value: this.copy(study.timeline),
      },
      {
        label: this.copy(this.labels.stack),
        value: showcase.stack.join(' / '),
      },
    ];
  });

  public readonly constraintItems = computed(() => this.copyList(this.caseStudy().constraints));
  public readonly solutionStackItems = computed(() => [...this.showcaseProject().stack]);

  public readonly impactMetrics = computed<readonly ContentMetricItem[]>(() =>
    this.showcaseProject().metrics.map((metric) => ({
      label: this.copy(metric.label),
      value: metric.value,
    })),
  );

  public readonly nextPreview = computed(() => this.previewFor(this.nextCaseStudy().slug));
  public readonly nextTeaser = computed(() => this.teaserFor(this.nextCaseStudy().slug));

  public constructor() {
    effect(() => {
      const study = this.caseStudy();
      const language = this.languageService.language();
      this.titleService.setTitle(study.seoTitle[language]);
      this.meta.updateTag({
        name: 'description',
        content: study.seoDescription[language],
      });

      if (isPlatformBrowser(this.platformId)) {
        this.document.defaultView?.scrollTo({ top: 0, behavior: 'auto' });
      }
    });
  }

  public copy<T>(value: { en: T; pt: T }): T {
    return this.languageService.copy(value);
  }

  public copyList(value: { en: readonly string[]; pt: readonly string[] }): readonly string[] {
    return value[this.languageService.language()];
  }

  public homeProjectsHref(): string {
    return this.languageService.sectionHref('projects');
  }

  public caseRoute(slug: CaseStudySlug): readonly string[] {
    return this.languageService.caseRoute(slug);
  }

  public previewFor(slug: CaseStudySlug): ShowcaseProject {
    return (
      PROJECTS_SECTION_DATA.projects.find((project) => project.slug == slug) ??
      DEFAULT_CASE_SHOWCASE
    );
  }

  public teaserFor(slug: CaseStudySlug): { en: string; pt: string } {
    return (
      CASE_STUDY_PREVIEWS.find((project) => project.slug == slug)?.teaser ??
      CASE_STUDY_PREVIEWS[0].teaser
    );
  }
}
