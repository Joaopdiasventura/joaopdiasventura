import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ContentMetricItem,
  ContentMetricList,
} from '../../../../../../shared/components/content/content-metric-list/content-metric-list';
import { UiButton } from '../../../../../../shared/components/ui/ui-button/ui-button';
import { provideLocalAssetImageLoader } from '../../../../../../shared/images/local-asset-image-loader';

export interface ProjectCardViewModel {
  readonly caseActionLabel: string;
  readonly caseRoute: readonly string[] | null;
  readonly category: string;
  readonly coverAlt: string;
  readonly coverSrc: string;
  readonly coverSrcset: string;
  readonly imageSizes: string;
  readonly iconHeight: number;
  readonly iconSrc: string;
  readonly iconWidth: number;
  readonly imagesReady: boolean;
  readonly indexLabel: string;
  readonly metric: ContentMetricItem | null;
  readonly name: string;
  readonly primaryActionHref: string;
  readonly primaryActionLabel: string;
  readonly problemLabel: string;
  readonly problem: string;
  readonly resultLabel: string;
  readonly solutionLabel: string;
  readonly solution: string;
  readonly stackLabel: string;
  readonly stackSummary: string;
  readonly theme: string;
  readonly titleId: string;
}

@Component({
  selector: 'app-project-card',
  imports: [ContentMetricList, NgOptimizedImage, RouterLink, UiButton],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideLocalAssetImageLoader()],
})
export class ProjectCard {
  public readonly project = input.required<ProjectCardViewModel>();

  protected readonly metricItems = computed<readonly ContentMetricItem[]>(() => {
    const metric = this.project().metric;
    return metric ? [metric] : [];
  });
}
