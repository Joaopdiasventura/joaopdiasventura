import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

export type UiTextFieldType = 'email' | 'text';

@Component({
  selector: 'app-ui-text-field',
  templateUrl: './ui-text-field.html',
  styleUrl: './ui-text-field.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTextField {
  public readonly autocomplete = input<string | null>(null);
  public readonly disabled = input(false);
  public readonly id = input.required<string>();
  public readonly invalid = input(false);
  public readonly label = input.required<string>();
  public readonly required = input(false);
  public readonly type = input<UiTextFieldType>('text');
  public readonly value = input('');

  public readonly blurred = output<void>();
  public readonly valueChange = output<string>();

  public onBlur(): void {
    this.blurred.emit();
  }

  public onInput(event: Event): void {
    const target = event.target;

    if (!(target instanceof HTMLInputElement)) {
      return;
    }

    this.valueChange.emit(target.value);
  }
}
