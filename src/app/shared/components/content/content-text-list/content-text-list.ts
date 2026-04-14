import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type ContentTextListVariant = 'bullet' | 'plain' | 'stack';

@Component({
  selector: 'app-content-text-list',
  templateUrl: './content-text-list.html',
  styleUrl: './content-text-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentTextList {
  public readonly items = input.required<readonly string[]>();
  public readonly variant = input<ContentTextListVariant>('plain');

  public isVariant(name: ContentTextListVariant): boolean {
    return this.variant() == name;
  }
}
