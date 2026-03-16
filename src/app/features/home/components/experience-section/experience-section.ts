import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { EXPERIENCE_ENTRIES, EXPERIENCE_HEADING } from '../../../../core/data/portfolio.data';
import { LanguageService } from '../../../../core/services/language.service';

@Component({
  selector: 'app-experience-section',
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
