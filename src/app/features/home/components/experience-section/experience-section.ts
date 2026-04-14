import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { EXPERIENCE_ENTRIES, EXPERIENCE_HEADING } from '../../../../core/data/portfolio.data';
import { LanguageService } from '../../../../core/services/language/language.service';
import { ContentSectionHeading } from '../../../../shared/components/content/content-section-heading/content-section-heading';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll/reveal-on-scroll.directive';
import { ViewportTiltDirective } from '../../../../shared/directives/viewport-tilt/viewport-tilt.directive';
import { ExperienceCard } from './cards/experience-card/experience-card';

@Component({
  selector: 'app-experience-section',
  imports: [ContentSectionHeading, ExperienceCard, RevealOnScrollDirective, ViewportTiltDirective],
  templateUrl: './experience-section.html',
  styleUrl: './experience-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceSection {
  public readonly heading = EXPERIENCE_HEADING;
  public readonly experiences = EXPERIENCE_ENTRIES;

  private readonly languageService = inject(LanguageService);

  public copy<T>(value: { en: T; pt: T }): T {
    return this.languageService.copy(value);
  }

  public experienceHighlights(value: {
    en: readonly string[];
    pt: readonly string[];
  }): readonly string[] {
    return value[this.languageService.language()].slice(0, 2);
  }
}
