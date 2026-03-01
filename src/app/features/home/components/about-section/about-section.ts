import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslationKey } from '../../../../core/i18n/translation.types';
import { LanguageService } from '../../../../core/services/language.service';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-about-section',
  imports: [RevealOnScrollDirective, NgOptimizedImage],
  templateUrl: './about-section.html',
  styleUrl: './about-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSection {
  private readonly languageService = inject(LanguageService);

  public readonly languageKeys = [
    'languages.pt',
    'languages.en',
    'languages.fr',
  ] as const;

  public translate(key: TranslationKey): string {
    return this.languageService.translate(key);
  }
}
