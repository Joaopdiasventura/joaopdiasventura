import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationKey } from '../../../../core/i18n/translation.types';
import { NavSectionId } from '../../../../core/models/portfolio.model';
import { LanguageService } from '../../../../core/services/language.service';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-hero-section',
  imports: [NgOptimizedImage, RevealOnScrollDirective, RouterLink],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSection {
  public readonly languageService = inject(LanguageService);

  public translate(key: TranslationKey): string {
    return this.languageService.translate(key);
  }

  public sectionRoute(section: NavSectionId): readonly string[] {
    return this.languageService.buildRoute(this.languageService.language(), section);
  }
}
