import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface ContentMetaItem {
  readonly external?: boolean;
  readonly href?: string;
  readonly label: string;
  readonly value: string;
}

@Component({
  selector: 'app-content-meta-list',
  templateUrl: './content-meta-list.html',
  styleUrl: './content-meta-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentMetaList {
  public readonly items = input.required<readonly ContentMetaItem[]>();

  public itemRel(item: ContentMetaItem): string | null {
    return item.external ? 'noopener noreferrer' : null;
  }

  public itemTarget(item: ContentMetaItem): '_blank' | null {
    return item.external ? '_blank' : null;
  }
}
