import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NAV_ITEMS } from '../../../../core/data/portfolio.data';
import { TranslationKey } from '../../../../core/i18n/translation.types';
import { NavSectionId } from '../../../../core/models/portfolio.model';
import { LanguageService } from '../../../../core/services/language.service';
import { ThemeService } from '../../../../core/services/theme.service';

@Component({
  selector: 'app-navbar',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  public readonly navItems = NAV_ITEMS;
  public readonly languageService = inject(LanguageService);
  public readonly themeService = inject(ThemeService);

  private readonly router = inject(Router);

  public readonly isMenuOpen = signal(false);
  public readonly isDarkTheme = computed(() => this.themeService.theme() == 'dark');
  public readonly themeIconPath = computed(() =>
    this.isDarkTheme() ? '/assets/icons/sun.svg' : '/assets/icons/moon.svg',
  );

  public toggleMenu(): void {
    this.isMenuOpen.update((currentState) => !currentState);
  }

  public closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  public translate(key: TranslationKey): string {
    return this.languageService.translate(key);
  }

  public homeRoute(): readonly string[] {
    return this.languageService.buildRoute();
  }

  public sectionRoute(section: NavSectionId): readonly string[] {
    return this.languageService.buildRoute(this.languageService.language(), section);
  }

  public menuToggleIconPath(): string {
    return this.isMenuOpen() ? '/assets/icons/close.svg' : '/assets/icons/menu.svg';
  }

  public async toggleLanguageRoute(): Promise<void> {
    const currentSection = this.resolveCurrentSection();
    const route = this.languageService.toggleLanguage(currentSection);
    this.closeMenu();
    await this.router.navigate(route);
  }

  private resolveCurrentSection(): NavSectionId | null {
    const routeSegments = this.router.url.split('?')[0].split('#')[0].split('/').filter(Boolean);

    if (routeSegments.length < 2) {
      return null;
    }

    const sectionCandidate = routeSegments[1];
    return this.navItems.some((item) => item.id == sectionCandidate)
      ? (sectionCandidate as NavSectionId)
      : null;
  }
}
