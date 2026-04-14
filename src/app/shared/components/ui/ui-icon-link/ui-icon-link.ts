import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-ui-icon-link',
  imports: [NgOptimizedImage],
  templateUrl: './ui-icon-link.html',
  styleUrl: './ui-icon-link.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiIconLink {
  public readonly ariaLabel = input.required<string>();
  public readonly external = input(false);
  public readonly href = input.required<string>();
  public readonly iconAlt = input('');
  public readonly iconHeight = input(18);
  public readonly iconSrc = input.required<string>();
  public readonly iconWidth = input(18);

  public rel(): string | null {
    return this.external() ? 'noopener noreferrer' : null;
  }

  public target(): '_blank' | null {
    return this.external() ? '_blank' : null;
  }
}
