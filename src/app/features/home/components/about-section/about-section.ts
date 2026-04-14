import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CREDIBILITY_CONTENT } from '../../../../core/data/portfolio.data';
import { LanguageService } from '../../../../core/services/language/language.service';
import {
  ContentMetaItem,
} from '../../../../shared/components/content/content-meta-list/content-meta-list';
import { ContentSectionHeading } from '../../../../shared/components/content/content-section-heading/content-section-heading';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll/reveal-on-scroll.directive';
import { ViewportTiltDirective } from '../../../../shared/directives/viewport-tilt/viewport-tilt.directive';
import { ProfileGroupCard } from './cards/profile-group-card/profile-group-card';
import { ProfileMetaCard } from './cards/profile-meta-card/profile-meta-card';
import { ProfileStatementCard } from './cards/profile-statement-card/profile-statement-card';

@Component({
  selector: 'app-about-section',
  imports: [
    ContentSectionHeading,
    ProfileGroupCard,
    ProfileMetaCard,
    ProfileStatementCard,
    RevealOnScrollDirective,
    ViewportTiltDirective,
  ],
  templateUrl: './about-section.html',
  styleUrl: './about-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSection {
  public readonly content = CREDIBILITY_CONTENT;
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

  public factItems(): readonly ContentMetaItem[] {
    return this.content.facts.map((fact) => ({
      href: fact.href,
      label: this.copy(fact.label),
      value: this.copy(fact.value),
    }));
  }
}
