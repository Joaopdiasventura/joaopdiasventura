import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { HERO_CONTENT } from '../../../../core/data/portfolio.data';
import { HeroCta, NavSectionId } from '../../../../core/models/portfolio.model';
import { LanguageService } from '../../../../core/services/language/language.service';
import { UiButton } from '../../../../shared/components/ui/ui-button/ui-button';
import { ViewportTiltDirective } from '../../../../shared/directives/viewport-tilt/viewport-tilt.directive';
import { provideLocalAssetImageLoader } from '../../../../shared/images/local-asset-image-loader';

const HERO_PORTRAIT_SIZES = '(min-width: 1200px) 18rem, 16rem';
const HERO_PORTRAIT_SRCSET = '256w, 384w, 448w, 504w';

@Component({
  selector: 'app-hero-section',
  imports: [NgOptimizedImage, UiButton, ViewportTiltDirective],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideLocalAssetImageLoader()],
})
export class HeroSection {
  public readonly content = HERO_CONTENT;
  public readonly portraitSizes = HERO_PORTRAIT_SIZES;
  public readonly portraitSrcset = HERO_PORTRAIT_SRCSET;
  public readonly portraitLocation = {
    en: 'São Paulo',
    pt: 'São Paulo',
  } as const;
  public readonly portraitCaption = {
    en: 'Data systems · Frontend craft',
    pt: 'Sistemas de dados · Frontend craft',
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
