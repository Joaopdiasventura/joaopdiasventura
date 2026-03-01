import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { effect, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { Theme } from '../models/language.model';

const THEME_STORAGE_KEY = 'portfolio-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  public readonly theme = signal<Theme>(this.resolveInitialTheme());

  public constructor() {
    effect(() => {
      if (!isPlatformBrowser(this.platformId)) {
        return;
      }

      const selectedTheme = this.theme();
      const rootElement = this.document.documentElement;
      rootElement.classList.remove('light', 'dark');
      rootElement.classList.add(selectedTheme);
      localStorage.setItem(THEME_STORAGE_KEY, selectedTheme);
    });
  }

  public toggleTheme(): void {
    this.theme.update((currentTheme) => (currentTheme == 'light' ? 'dark' : 'light'));
  }

  private resolveInitialTheme(): Theme {
    if (!isPlatformBrowser(this.platformId)) {
      return 'light';
    }

    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme == 'dark' || storedTheme == 'light') {
      return storedTheme;
    }

    if (typeof window.matchMedia !== 'function') {
      return 'light';
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}
