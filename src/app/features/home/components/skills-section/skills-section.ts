import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CAPABILITY_CLUSTERS, CAPABILITY_HEADING } from '../../../../core/data/portfolio.data';
import { LanguageService } from '../../../../core/services/language.service';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-skills-section',
  imports: [RevealOnScrollDirective],
  templateUrl: './skills-section.html',
  styleUrl: './skills-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsSection {
  public readonly heading = CAPABILITY_HEADING;
  public readonly clusters = CAPABILITY_CLUSTERS;
  private readonly languageService = inject(LanguageService);

  public copy<T>(value: { en: T; pt: T }): T {
    return this.languageService.copy(value);
  }
}
