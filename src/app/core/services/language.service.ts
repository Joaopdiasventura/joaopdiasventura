import { DOCUMENT } from '@angular/common';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { NavSectionId } from '../models/portfolio.model';
import { DEFAULT_LANGUAGE, Language, SUPPORTED_LANGUAGES } from '../models/language.model';
import { TranslationDictionary, TranslationKey } from '../i18n/translation.types';

const HTML_LANGUAGE_BY_ROUTE_LANGUAGE: Record<Language, string> = {
  en: 'en',
  pt: 'pt-BR',
};

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);

  public readonly language = signal<Language>(DEFAULT_LANGUAGE);
  private readonly dictionary = signal<TranslationDictionary | null>(null);

  public readonly isReady = computed(() => this.dictionary() !== null);
  public readonly isPortuguese = computed(() => this.language() == 'pt');
  public readonly cvPath = computed(() =>
    this.isPortuguese() ? '/cv/CV_JoaoPaulo_PT.pdf' : '/cv/CV_JoaoPaulo_EN.pdf',
  );

  public constructor() {
    effect(() => {
      this.document.documentElement.lang = HTML_LANGUAGE_BY_ROUTE_LANGUAGE[this.language()];
    });
  }

  public async setLanguage(language: Language): Promise<void> {
    const currentDictionary = this.dictionary();
    if (this.language() == language && currentDictionary) {
      return;
    }

    const loadedDictionary = await this.loadDictionary(language);
    this.language.set(language);
    this.dictionary.set(loadedDictionary);
  }

  public translate(key: TranslationKey): string {
    const currentDictionary = this.dictionary();
    if (!currentDictionary) {
      return key;
    }

    return currentDictionary[key] ?? key;
  }

  public toggleLanguage(currentSection: NavSectionId | null): readonly string[] {
    const nextLanguage = this.language() == 'en' ? 'pt' : 'en';
    return this.buildRoute(nextLanguage, currentSection);
  }

  public buildRoute(
    language: Language = this.language(),
    section: NavSectionId | null = null,
  ): readonly string[] {
    if (section) {
      return ['/', language, section] as const;
    }

    return ['/', language] as const;
  }

  public alternateRoutes(section: NavSectionId | null = null): Readonly<Record<Language, string>> {
    return {
      en: this.serializeRoute('en', section),
      pt: this.serializeRoute('pt', section),
    };
  }

  public supportedLanguage(language: string | null): language is Language {
    if (!language) {
      return false;
    }

    return (SUPPORTED_LANGUAGES as readonly string[]).includes(language);
  }

  private async loadDictionary(language: Language): Promise<TranslationDictionary> {
    if (language == 'en') {
      const module = await import('../i18n/translations/en');
      return module.EN_TRANSLATIONS;
    }

    const module = await import('../i18n/translations/pt');
    return module.PT_TRANSLATIONS;
  }

  private serializeRoute(language: Language, section: NavSectionId | null): string {
    if (section) {
      return `/${language}/${section}`;
    }

    return `/${language}`;
  }
}
