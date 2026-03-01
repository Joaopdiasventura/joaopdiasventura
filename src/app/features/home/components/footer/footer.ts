import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SOCIAL_LINKS } from '../../../../core/data/portfolio.data';
import { TranslationKey } from '../../../../core/i18n/translation.types';
import { SocialLink } from '../../../../core/models/portfolio.model';
import { LanguageService } from '../../../../core/services/language.service';

@Component({
  selector: 'app-footer',
  imports: [NgOptimizedImage],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  public readonly socialLinks = SOCIAL_LINKS;
  public readonly currentYear = new Date().getFullYear();

  private readonly languageService = inject(LanguageService);

  public translate(key: TranslationKey): string {
    return this.languageService.translate(key);
  }

  public iconPath(link: SocialLink): string {
    if (link.icon == 'github') {
      return '/assets/icons/github.svg';
    }

    if (link.icon == 'linkedin') {
      return '/assets/icons/linkedin.svg';
    }

    return '/assets/icons/envelope.svg';
  }
}
