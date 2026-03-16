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
import { FEATURED_WORK_CONTENT } from '../../../core/data/portfolio.data';
import { CaseStudySlug } from '../../../core/models/portfolio.model';
import { LanguageService } from '../../../core/services/language.service';
import { BrandScene } from '../../../shared/components/brand-scene/brand-scene';
import { RevealOnScrollDirective } from '../../../shared/directives/reveal-on-scroll.directive';
import { ViewportTiltDirective } from '../../../shared/directives/viewport-tilt.directive';

@Component({
  selector: 'app-case-study-page',
  imports: [RouterLink, BrandScene, RevealOnScrollDirective, ViewportTiltDirective],
  templateUrl: './case-study-page.html',
  styleUrl: './case-study-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaseStudyPage {
  public readonly workCopy = FEATURED_WORK_CONTENT;
  public readonly labels = {
    back: { en: 'Back to work', pt: 'Voltar para cases' },
    role: { en: 'Role', pt: 'Papel' },
    timeline: { en: 'Timeline', pt: 'Linha do tempo' },
    stack: { en: 'Stack', pt: 'Stack' },
    overview: { en: 'Overview', pt: 'Visão geral' },
    challenge: { en: 'Challenge', pt: 'Desafio' },
    constraints: { en: 'Constraints', pt: 'Restrições' },
    decisions: { en: 'Architecture decisions', pt: 'Decisões de arquitetura' },
    decisionsTitle: { en: 'How the system was shaped.', pt: 'Como o sistema foi moldado.' },
    results: { en: 'Results', pt: 'Resultados' },
    nextCase: { en: 'Next case', pt: 'Próximo case' },
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

  public homeWorkHref(): string {
    return this.languageService.sectionHref('work');
  }

  public caseRoute(slug: CaseStudySlug): readonly string[] {
    return this.languageService.caseRoute(slug);
  }
}
