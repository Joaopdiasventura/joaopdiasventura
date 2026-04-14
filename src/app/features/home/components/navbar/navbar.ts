import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { NAV_ITEMS, SITE_CHROME } from '../../../../core/data/portfolio.data';
import { NavSectionId } from '../../../../core/models/portfolio.model';
import { LanguageService } from '../../../../core/services/language/language.service';
import { UiButton } from '../../../../shared/components/ui/ui-button/ui-button';

@Component({
  selector: 'app-navbar',
  imports: [NgOptimizedImage, UiButton],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  public readonly navItems = NAV_ITEMS;
  public readonly chrome = SITE_CHROME;
  public readonly brandStrapline = {
    en: 'Architecture · Delivery · Scale',
    pt: 'Arquitetura · Entrega · Escala',
  } as const;
  public readonly languageService = inject(LanguageService);

  private readonly router = inject(Router);

  public readonly isMenuOpen = signal(false);
  public readonly languageLabel = computed(() => this.languageService.language().toUpperCase());

  public copy<T>(value: { en: T; pt: T }): T {
    return this.languageService.copy(value);
  }

  public homeHref(): string {
    return `/${this.languageService.language()}#top`;
  }

  public sectionHref(section: NavSectionId): string {
    return this.languageService.sectionHref(section);
  }

  public alternateLanguageHref(): string {
    const nextLanguage = this.languageService.language() == 'en' ? 'pt' : 'en';
    const [pathAndQuery, currentFragment] = this.router.url.split('#');
    const [pathname, currentQuery] = pathAndQuery.split('?');
    const currentSegments = pathname.split('/').filter(Boolean);
    const nextPath = `/${[nextLanguage, ...currentSegments.slice(1)].join('/')}`;
    const querySuffix = currentQuery ? `?${currentQuery}` : '';
    const fragmentSuffix = currentFragment ? `#${currentFragment}` : '';

    return `${nextPath}${querySuffix}${fragmentSuffix}`;
  }

  public toggleMenu(): void {
    this.isMenuOpen.update((currentState) => !currentState);
  }

  public closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
