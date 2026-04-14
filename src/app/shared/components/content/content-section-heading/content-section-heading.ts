import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RevealOnScrollDirective } from '../../../directives/reveal-on-scroll/reveal-on-scroll.directive';

export type ContentHeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

@Component({
  selector: 'app-content-section-heading',
  imports: [RevealOnScrollDirective],
  templateUrl: './content-section-heading.html',
  styleUrl: './content-section-heading.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentSectionHeading {
  public readonly eyebrow = input.required<string>();
  public readonly headingLevel = input<ContentHeadingLevel>(2);
  public readonly summary = input.required<string>();
  public readonly summaryDelayMs = input(100);
  public readonly title = input.required<string>();
  public readonly titleId = input.required<string>();
}
