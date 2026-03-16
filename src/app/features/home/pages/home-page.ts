import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  effect,
  ElementRef,
  inject,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SITE_CHROME } from '../../../core/data/portfolio.data';
import { LanguageService } from '../../../core/services/language.service';
import { MotionCleanup, MotionService } from '../../../shared/services/motion.service';
import { AboutSection } from '../components/about-section/about-section';
import { ContactSection } from '../components/contact-section/contact-section';
import { EducationSection } from '../components/education-section/education-section';
import { ExperienceSection } from '../components/experience-section/experience-section';
import { Footer } from '../components/footer/footer';
import { HeroSection } from '../components/hero-section/hero-section';
import { MetricsSection } from '../components/metrics-section/metrics-section';
import { Navbar } from '../components/navbar/navbar';
import { ProjectsSection } from '../components/projects-section/projects-section';
import { SkillsSection } from '../components/skills-section/skills-section';
import { initializeHomePageMotion } from './home-page.motion';

@Component({
  selector: 'app-home-page',
  imports: [
    Navbar,
    HeroSection,
    MetricsSection,
    AboutSection,
    ExperienceSection,
    SkillsSection,
    ProjectsSection,
    EducationSection,
    ContactSection,
    Footer,
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage implements AfterViewInit {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);
  private readonly languageService = inject(LanguageService);
  private readonly motionService = inject(MotionService);
  private readonly meta = inject(Meta);
  private readonly titleService = inject(Title);

  private motionCleanup: MotionCleanup = () => undefined;
  private motionInitialized = false;

  public constructor() {
    effect(() => {
      const language = this.languageService.language();
      this.titleService.setTitle('João Paulo Dias Ventura | Portfolio');
      this.meta.updateTag({
        name: 'description',
        content: SITE_CHROME.homeDescription[language],
      });

      if (!this.motionInitialized) {
        return;
      }

      queueMicrotask(() => {
        void this.motionService.refresh();
      });
    });

    this.destroyRef.onDestroy(() => {
      this.motionCleanup();
    });
  }

  public ngAfterViewInit(): void {
    void this.initializeMotion();
  }

  private async initializeMotion(): Promise<void> {
    this.motionCleanup = await this.motionService.animate(
      this.host.nativeElement,
      initializeHomePageMotion,
    );
    this.motionInitialized = true;
    await this.motionService.refresh();
  }
}
