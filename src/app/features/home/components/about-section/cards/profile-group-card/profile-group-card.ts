import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ContentTextList } from '../../../../../../shared/components/content/content-text-list/content-text-list';

@Component({
  selector: 'app-profile-group-card',
  imports: [ContentTextList],
  templateUrl: './profile-group-card.html',
  styleUrl: './profile-group-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileGroupCard {
  public readonly items = input.required<readonly string[]>();
  public readonly title = input.required<string>();
}
