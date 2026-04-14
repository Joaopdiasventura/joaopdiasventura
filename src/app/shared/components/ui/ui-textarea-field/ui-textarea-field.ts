import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-ui-textarea-field',
  templateUrl: './ui-textarea-field.html',
  styleUrl: './ui-textarea-field.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTextareaField {
  public readonly disabled = input(false);
  public readonly id = input.required<string>();
  public readonly invalid = input(false);
  public readonly label = input.required<string>();
  public readonly required = input(false);
  public readonly rows = input(6);
  public readonly value = input('');

  public readonly blurred = output<void>();
  public readonly valueChange = output<string>();

  public onBlur(): void {
    this.blurred.emit();
  }

  public onInput(event: Event): void {
    const target = event.target;

    if (!(target instanceof HTMLTextAreaElement)) {
      return;
    }

    this.valueChange.emit(target.value);
  }
}
