import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LanguageService } from '../../../core/services/language.service';
import { BrandScene } from '../../../shared/components/brand-scene/brand-scene';

@Component({
  selector: 'app-not-found-page',
  imports: [RouterLink, BrandScene],
  templateUrl: './not-found-page.html',
  styleUrl: './not-found-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPage implements OnInit {
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly languageService = inject(LanguageService);

  public readonly content = {
    title: {
      en: 'Page not found.',
      pt: 'Página não encontrada.',
    },
    action: {
      en: 'Back to portfolio',
      pt: 'Voltar ao portfólio',
    },
  } as const;

  public ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    console.error(
      '404 Error: User attempted to access non-existent route:',
      this.router.url,
    );
  }

  public copy<T>(value: { en: T; pt: T }): T {
    return this.languageService.copy(value);
  }
}
