import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PROJECTS_SECTION_DATA } from '../../../../core/data/projects-section.data';
import { LanguageService } from '../../../../core/services/language.service';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';
import { ScrollMotionDirective } from '../../../../shared/directives/scroll-motion.directive';

const PROJECT_SCROLL_BREAKPOINT = 960;
const PROJECT_SCROLL_TOP_OFFSET = 96;
const PROJECT_CARD_IMAGE_SIZES = '(max-width: 959px) 84vw, 34rem';

@Component({
  selector: 'app-projects-section',
  imports: [NgOptimizedImage, RevealOnScrollDirective, ScrollMotionDirective],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSection {
  public readonly content = PROJECTS_SECTION_DATA;
  public readonly imageSizes = PROJECT_CARD_IMAGE_SIZES;
  public readonly scrollMinWidth = PROJECT_SCROLL_BREAKPOINT;
  public readonly scrollTopOffset = PROJECT_SCROLL_TOP_OFFSET;
  public readonly labels = {
    desktopHint: {
      en: 'Scroll vertically to move across the project rail.',
      pt: 'Role verticalmente para atravessar o trilho de projetos.',
    },
    mobileHint: {
      en: 'Swipe horizontally to browse the projects.',
      pt: 'Deslize horizontalmente para navegar pelos projetos.',
    },
    metrics: {
      en: 'Metrics',
      pt: 'Metricas',
    },
    highlights: {
      en: 'Highlights',
      pt: 'Destaques',
    },
    stack: {
      en: 'Core stack',
      pt: 'Stack principal',
    },
  } as const;

  private readonly languageService = inject(LanguageService);

  public copy<T>(value: { en: T; pt: T }): T {
    return this.languageService.copy(value);
  }

  public copyList(value: {
    en: readonly string[];
    pt: readonly string[];
  }): readonly string[] {
    return value[this.languageService.language()];
  }
}
