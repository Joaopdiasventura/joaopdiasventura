import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { EXPERIENCES } from '../../../../core/data/portfolio.data';
import { TranslationKey } from '../../../../core/i18n/translation.types';
import { LanguageService } from '../../../../core/services/language.service';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-experience-section',
  imports: [RevealOnScrollDirective],
  templateUrl: './experience-section.html',
  styleUrl: './experience-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceSection {
  public readonly experiences = EXPERIENCES;
  private readonly languageService = inject(LanguageService);

  public translate(key: TranslationKey): string {
    return this.languageService.translate(key);
  }
}

