import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import {
  SKILL_GROUPS,
  SPECIALIZATIONS_EN,
  SPECIALIZATIONS_PT,
} from '../../../../core/data/portfolio.data';
import { TranslationKey } from '../../../../core/i18n/translation.types';
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
  public readonly skillGroups = SKILL_GROUPS;
  private readonly languageService = inject(LanguageService);

  public readonly specializations = computed(() =>
    this.languageService.isPortuguese() ? SPECIALIZATIONS_PT : SPECIALIZATIONS_EN,
  );

  public translate(key: TranslationKey): string {
    return this.languageService.translate(key);
  }
}


