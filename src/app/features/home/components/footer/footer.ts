import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SITE_CHROME, SOCIAL_LINKS } from '../../../../core/data/portfolio.data';
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
  public readonly currentYear = new Date().getFullYear();
  public readonly socialLinks = SOCIAL_LINKS;
  public readonly chrome = SITE_CHROME;

  private readonly languageService = inject(LanguageService);

  public copy<T>(value: { en: T; pt: T }): T {
    return this.languageService.copy(value);
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
