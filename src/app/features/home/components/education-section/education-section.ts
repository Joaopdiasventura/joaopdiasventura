import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  CERTIFICATION_KEYS,
  EDUCATION_ITEMS,
} from '../../../../core/data/portfolio.data';
import { TranslationKey } from '../../../../core/i18n/translation.types';
import { LanguageService } from '../../../../core/services/language.service';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-education-section',
  imports: [RevealOnScrollDirective, NgOptimizedImage],
  templateUrl: './education-section.html',
  styleUrl: './education-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationSection {
  public readonly educationItems = EDUCATION_ITEMS;
  public readonly certificationKeys = CERTIFICATION_KEYS;

  private readonly languageService = inject(LanguageService);

  public translate(key: TranslationKey): string {
    return this.languageService.translate(key);
  }
}
