import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import {
  ContentMetaItem,
  ContentMetaList,
} from '../../../../../../shared/components/content/content-meta-list/content-meta-list';

@Component({
  selector: 'app-profile-meta-card',
  imports: [ContentMetaList],
  templateUrl: './profile-meta-card.html',
  styleUrl: './profile-meta-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileMetaCard {
  public readonly items = input.required<readonly ContentMetaItem[]>();
}
