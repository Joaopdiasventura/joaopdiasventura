import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, PLATFORM_ID } from '@angular/core';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { NavSectionId } from '../../../core/models/portfolio.model';
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
export class HomePage {
  private readonly route = inject(ActivatedRoute);
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  private lastRenderedTargetId: string | null = null;

  private readonly activeSection = toSignal(
    this.route.paramMap.pipe(
      map((params) => {
        const sectionParam = params.get('section');
        return (sectionParam as NavSectionId | null) ?? null;
      }),
    ),
    { initialValue: null },
  );

  public constructor() {
    effect(() => {
      const section = this.activeSection();
      if (!isPlatformBrowser(this.platformId)) {
        return;
      }

      const targetId = section ?? 'top';
      if (this.lastRenderedTargetId == targetId) {
        return;
      }

      this.lastRenderedTargetId = targetId;
      queueMicrotask(() => {
        const targetElement = this.document.getElementById(targetId);
        if (!targetElement) {
          return;
        }

        targetElement.scrollIntoView({
          behavior: section ? 'smooth' : 'auto',
          block: 'start',
        });
      });
    });
  }
}
