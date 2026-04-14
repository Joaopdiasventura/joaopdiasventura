import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface ContentMetricItem {
  readonly label: string;
  readonly value: string;
}

@Component({
  selector: 'app-content-metric-list',
  templateUrl: './content-metric-list.html',
  styleUrl: './content-metric-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentMetricList {
  public readonly items = input.required<readonly ContentMetricItem[]>();
  public readonly templateColumns = input<string | null>(null);
  public readonly valueFirst = input(false);
}
