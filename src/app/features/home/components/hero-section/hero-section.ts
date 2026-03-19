import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { HERO_CONTENT } from '../../../../core/data/portfolio.data';
import { HeroCta, NavSectionId } from '../../../../core/models/portfolio.model';
import { LanguageService } from '../../../../core/services/language.service';
import { ViewportTiltDirective } from '../../../../shared/directives/viewport-tilt.directive';

@Component({
  selector: 'app-hero-section',
  imports: [NgOptimizedImage, ViewportTiltDirective],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSection {
  public readonly content = HERO_CONTENT;
  public readonly portraitLocation = {
    en: 'São Paulo',
    pt: 'São Paulo',
  } as const;
  public readonly portraitCaption = {
    en: 'Data oriented engineering · Premium frontend',
    pt: 'Engenharia orientada a dados · Frontend premium',
  } as const;
  public readonly languageService = inject(LanguageService);

  public readonly titleLines = computed(() => this.languageService.copy(this.content.titleLines));

  public copy<T>(value: { en: T; pt: T }): T {
    return this.languageService.copy(value);
  }

  public ctaHref(cta: HeroCta): string | null {
    if (cta.id == 'cv') {
      return null;
    }

    return this.languageService.sectionHref(cta.id as NavSectionId);
  }
}
