import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, PLATFORM_ID } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { SITE_CHROME } from '../../../../core/data/portfolio.data';
import { LanguageService } from '../../../../core/services/language/language.service';
import { BrandScene } from '../../../../shared/components/brand-scene/brand-scene';
import { AboutSection } from '../../components/about-section/about-section';
import { ContactSection } from '../../components/contact-section/contact-section';
import { ExperienceSection } from '../../components/experience-section/experience-section';
import { Footer } from '../../components/footer/footer';
import { HeroSection } from '../../components/hero-section/hero-section';
import { MetricsSection } from '../../components/metrics-section/metrics-section';
import { Navbar } from '../../components/navbar/navbar';
import { ProjectsSection } from '../../components/projects-section/projects-section';
import { LoadingBg } from '../../../../shared/components/loading-bg/loading-bg';

@Component({
  selector: 'app-home-page',
  imports: [
    Navbar,
    BrandScene,
    LoadingBg,
    HeroSection,
    MetricsSection,
    AboutSection,
    ExperienceSection,
    ProjectsSection,
    ContactSection,
    Footer,
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  private readonly languageService = inject(LanguageService);
  private readonly meta = inject(Meta);
  private readonly titleService = inject(Title);
  private readonly route = inject(ActivatedRoute);
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly fragment = toSignal(this.route.fragment, { initialValue: null });

  public constructor() {
    effect(() => {
      const language = this.languageService.language();
      this.titleService.setTitle('João Paulo Dias Ventura | Portfolio');
      this.meta.updateTag({
        name: 'description',
        content: SITE_CHROME.homeDescription[language],
      });
    });

    effect(() => {
      const fragment = this.fragment();
      if (!isPlatformBrowser(this.platformId) || !fragment || fragment == 'projects') return;

      this.document.defaultView?.requestAnimationFrame(() => {
        const anchor = this.document.getElementById(fragment);
        if (!anchor) return;

        anchor.scrollIntoView({ block: 'start', behavior: 'auto' });

        const section = this.document.getElementById(`${fragment}-section`);
        const focusTarget = section ?? anchor;
        focusTarget.focus({ preventScroll: true });
      });
    });
  }
}
