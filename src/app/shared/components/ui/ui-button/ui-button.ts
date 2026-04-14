import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export type UiButtonVariant = 'primary' | 'secondary' | 'ghost';
export type UiButtonType = 'button' | 'submit' | 'reset';
export type UiButtonRouterLink = string | readonly string[];

@Component({
  selector: 'app-ui-button',
  imports: [RouterLink],
  templateUrl: './ui-button.html',
  styleUrl: './ui-button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiButton {
  public readonly ariaLabel = input<string | null>(null);
  public readonly disabled = input(false);
  public readonly external = input(false);
  public readonly href = input<string | null>(null);
  public readonly label = input.required<string>();
  public readonly routerLink = input<UiButtonRouterLink | null>(null);
  public readonly type = input<UiButtonType>('button');
  public readonly variant = input<UiButtonVariant>('primary');

  public controlClass(name: UiButtonVariant): boolean {
    return this.variant() == name;
  }

  public controlRel(): string | null {
    return this.external() ? 'noopener noreferrer' : null;
  }

  public controlTarget(): '_blank' | null {
    return this.external() ? '_blank' : null;
  }

  public disabledState(): 'true' | null {
    return this.disabled() ? 'true' : null;
  }
}
