import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { IMPACT_METRICS } from '../../../../core/data/portfolio.data';
import { LanguageService } from '../../../../core/services/language/language.service';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll/reveal-on-scroll.directive';
import { ViewportTiltDirective } from '../../../../shared/directives/viewport-tilt/viewport-tilt.directive';
import { ImpactMetricCard } from './cards/impact-metric-card/impact-metric-card';

@Component({
  selector: 'app-metrics-section',
  imports: [ImpactMetricCard, RevealOnScrollDirective, ViewportTiltDirective],
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
