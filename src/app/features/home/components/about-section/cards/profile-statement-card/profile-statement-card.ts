import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-profile-statement-card',
  templateUrl: './profile-statement-card.html',
  styleUrl: './profile-statement-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileStatementCard {
  public readonly text = input.required<string>();
}
