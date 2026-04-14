import { DOCUMENT } from '@angular/common';
import { effect, inject, Injectable, signal } from '@angular/core';
import { CaseStudySlug, LocalizedValue, NavSectionId } from '../../models/portfolio.model';
import { DEFAULT_LANGUAGE, Language, SUPPORTED_LANGUAGES } from '../../models/language.model';

const HTML_LANGUAGE_BY_ROUTE_LANGUAGE: Record<Language, string> = {
  en: 'en',
  pt: 'pt-BR',
};

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);

  public readonly language = signal<Language>(DEFAULT_LANGUAGE);
  public readonly cvPath = signal('/cv/CV_JoaoPaulo_EN.pdf');

  public constructor() {
    effect(() => {
      const language = this.language();
      this.document.documentElement.lang = HTML_LANGUAGE_BY_ROUTE_LANGUAGE[language];
      this.cvPath.set(language == 'pt' ? '/cv/CV_JoaoPaulo_PT.pdf' : '/cv/CV_JoaoPaulo_EN.pdf');
    });
  }

  public async setLanguage(language: Language): Promise<void> {
    this.language.set(language);
  }

  public copy<T>(value: LocalizedValue<T>): T {
    return value[this.language()];
  }

  public homeRoute(language: Language = this.language()): readonly string[] {
    return ['/', language] as const;
  }

  public sectionHref(section: NavSectionId, language: Language = this.language()): string {
    return `/${language}#${section}`;
  }

  public caseRoute(slug: CaseStudySlug, language: Language = this.language()): readonly string[] {
    return ['/', language, 'projects', slug] as const;
  }

  public supportedLanguage(language: string | null): language is Language {
    if (!language) return false;
    return (SUPPORTED_LANGUAGES as readonly string[]).includes(language);
  }
}
