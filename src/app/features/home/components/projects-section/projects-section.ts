import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PROJECTS } from '../../../../core/data/portfolio.data';
import { TranslationKey } from '../../../../core/i18n/translation.types';
import { ProjectIcon } from '../../../../core/models/portfolio.model';
import { LanguageService } from '../../../../core/services/language.service';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-projects-section',
  imports: [RevealOnScrollDirective, NgOptimizedImage],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSection {
  public readonly projects = PROJECTS;
  private readonly languageService = inject(LanguageService);

  public translate(key: TranslationKey): string {
    return this.languageService.translate(key);
  }

  public iconPath(icon: ProjectIcon): string {
    return `/assets/projects/icons/${icon}.svg`;
  }
}
