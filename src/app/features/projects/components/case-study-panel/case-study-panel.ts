import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-case-study-panel',
  templateUrl: './case-study-panel.html',
  styleUrl: './case-study-panel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaseStudyPanel {
  public readonly lead = input<string | null>(null);
  public readonly title = input<string | null>(null);
}
