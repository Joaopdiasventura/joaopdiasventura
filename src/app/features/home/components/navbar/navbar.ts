import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { NAV_ITEMS, SITE_CHROME } from '../../../../core/data/portfolio.data';
import { NavSectionId } from '../../../../core/models/portfolio.model';
import { LanguageService } from '../../../../core/services/language.service';

@Component({
  selector: 'app-navbar',
  imports: [NgOptimizedImage],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  public readonly navItems = NAV_ITEMS;
  public readonly chrome = SITE_CHROME;
  public readonly brandStrapline = {
    en: 'Architecture · Performance · Scalability',
    pt: 'Arquitetura · Performance · Escalabilidade',
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

  public toggleMenu(): void {
    this.isMenuOpen.update((currentState) => !currentState);
  }

  public closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  public async toggleLanguageRoute(): Promise<void> {
    const nextLanguage = this.languageService.language() == 'en' ? 'pt' : 'en';
    const currentSegments = this.router.url
      .split('?')[0]
      .split('#')[0]
      .split('/')
      .filter(Boolean);
    const currentFragment = this.router.url.split('#')[1] ?? undefined;

    const nextRoute =
      currentSegments.length > 0
        ? ['/', nextLanguage, ...currentSegments.slice(1)]
        : this.languageService.homeRoute(nextLanguage);

    this.closeMenu();
    await this.router.navigate(nextRoute, {
      fragment: currentFragment,
    });
  }
}
