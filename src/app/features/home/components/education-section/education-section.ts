import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CREDENTIALS_CONTENT } from '../../../../core/data/portfolio.data';
import { LanguageService } from '../../../../core/services/language.service';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-education-section',
  imports: [RevealOnScrollDirective],
  templateUrl: './education-section.html',
  styleUrl: './education-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationSection {
  public readonly content = CREDENTIALS_CONTENT;
  private readonly languageService = inject(LanguageService);

  public copy<T>(value: { en: T; pt: T }): T {
    return this.languageService.copy(value);
  }
}
