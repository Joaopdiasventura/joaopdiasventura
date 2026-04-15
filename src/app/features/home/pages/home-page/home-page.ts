import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
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

  public constructor() {
    effect(() => {
      const language = this.languageService.language();
      this.titleService.setTitle('João Paulo Dias Ventura | Portfolio');
      this.meta.updateTag({
        name: 'description',
        content: SITE_CHROME.homeDescription[language],
      });
    });
  }
}
