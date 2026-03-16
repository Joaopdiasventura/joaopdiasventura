import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { EXPERIENCE_ENTRIES, EXPERIENCE_HEADING } from '../../../../core/data/portfolio.data';
import { LanguageService } from '../../../../core/services/language.service';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';
import { ViewportTiltDirective } from '../../../../shared/directives/viewport-tilt.directive';

@Component({
  selector: 'app-experience-section',
  imports: [RevealOnScrollDirective, ViewportTiltDirective],
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
}
