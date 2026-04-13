import { DOCUMENT, isPlatformBrowser } from '@angular/common';
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
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { CASE_STUDIES } from '../../../core/data/case-studies.data';
import { CASE_STUDY_PREVIEWS } from '../../../core/data/case-study-previews.data';
import { PROJECTS_SECTION_DATA } from '../../../core/data/projects-section.data';
import { FEATURED_WORK_CONTENT } from '../../../core/data/portfolio.data';
import { CaseStudySlug } from '../../../core/models/portfolio.model';
import { LanguageService } from '../../../core/services/language.service';
import { BrandScene } from '../../../shared/components/brand-scene/brand-scene';
import { RevealOnScrollDirective } from '../../../shared/directives/reveal-on-scroll.directive';

type ShowcaseProject = (typeof PROJECTS_SECTION_DATA.projects)[number];

const DEFAULT_CASE_SHOWCASE =
  PROJECTS_SECTION_DATA.projects.find((project) => project.slug == 'vox') ??
  PROJECTS_SECTION_DATA.projects[0];

@Component({
  selector: 'app-case-study-page',
  imports: [RouterLink, BrandScene, RevealOnScrollDirective],
  templateUrl: './case-study-page.html',
  styleUrl: './case-study-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaseStudyPage {
  public readonly workCopy = FEATURED_WORK_CONTENT;
  public readonly labels = {
    back: { en: 'Back to work', pt: 'Voltar aos projetos' },
    overview: { en: 'Overview', pt: 'Visão geral' },
    problem: { en: 'Challenge', pt: 'Desafio' },
    solution: { en: 'Approach', pt: 'Abordagem' },
    role: { en: 'Role', pt: 'Papel' },
    timeline: { en: 'Context', pt: 'Contexto' },
    stack: { en: 'Stack', pt: 'Stack' },
    capabilities: { en: 'Key points', pt: 'Pontos-chave' },
    architecture: { en: 'Decisions', pt: 'Decisões' },
    constraints: { en: 'Constraints', pt: 'Restrições' },
    impact: { en: 'Impact', pt: 'Impacto' },
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
    return PROJECTS_SECTION_DATA.projects.find((project) => project.slug == study.slug)
      ?? DEFAULT_CASE_SHOWCASE;
  });

  public readonly nextCaseStudy = computed(() => {
    const current = this.caseStudy();
    const currentIndex = CASE_STUDIES.findIndex((item) => item.slug == current.slug);
    return CASE_STUDIES[(currentIndex + 1) % CASE_STUDIES.length];
  });

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

  public copyList(value: {
    en: readonly string[];
    pt: readonly string[];
  }): readonly string[] {
    return value[this.languageService.language()];
  }

  public homeWorkHref(): string {
    return this.languageService.sectionHref('work');
  }

  public caseRoute(slug: CaseStudySlug): readonly string[] {
    return this.languageService.caseRoute(slug);
  }

  public previewFor(slug: CaseStudySlug): ShowcaseProject {
    return PROJECTS_SECTION_DATA.projects.find((project) => project.slug == slug) ?? DEFAULT_CASE_SHOWCASE;
  }

  public teaserFor(slug: CaseStudySlug): { en: string; pt: string } {
    return CASE_STUDY_PREVIEWS.find((project) => project.slug == slug)?.teaser ?? CASE_STUDY_PREVIEWS[0].teaser;
  }
}
