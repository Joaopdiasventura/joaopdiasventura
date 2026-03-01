import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { METRICS } from '../../../../core/data/portfolio.data';
import { TranslationKey } from '../../../../core/i18n/translation.types';
import { LanguageService } from '../../../../core/services/language.service';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-metrics-section',
  imports: [RevealOnScrollDirective],
  templateUrl: './metrics-section.html',
  styleUrl: './metrics-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MetricsSection {
  public readonly metrics = METRICS;
  private readonly languageService = inject(LanguageService);

  public translate(key: TranslationKey): string {
    return this.languageService.translate(key);
  }
}


