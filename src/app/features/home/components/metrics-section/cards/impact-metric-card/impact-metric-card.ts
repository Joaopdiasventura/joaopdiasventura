import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import {
  ContentMetricItem,
  ContentMetricList,
} from '../../../../../../shared/components/content/content-metric-list/content-metric-list';

@Component({
  selector: 'app-impact-metric-card',
  imports: [ContentMetricList],
  templateUrl: './impact-metric-card.html',
  styleUrl: './impact-metric-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImpactMetricCard {
  public readonly label = input.required<string>();
  public readonly value = input.required<string>();

  protected readonly metricItems = computed<readonly ContentMetricItem[]>(() => [
    {
      label: this.label(),
      value: this.value(),
    },
  ]);
}
