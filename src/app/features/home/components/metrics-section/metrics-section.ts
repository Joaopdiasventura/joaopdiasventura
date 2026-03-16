import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { IMPACT_METRICS } from '../../../../core/data/portfolio.data';
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
  public readonly metrics = IMPACT_METRICS;
  public readonly ariaLabel = {
    en: 'Impact proof',
    pt: 'Provas de impacto',
  } as const;
  private readonly languageService = inject(LanguageService);

  public copy<T>(value: { en: T; pt: T }): T {
    return this.languageService.copy(value);
  }
}
