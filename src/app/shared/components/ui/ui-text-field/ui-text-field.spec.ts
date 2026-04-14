import { TestBed } from '@angular/core/testing';
import { UiTextField } from './ui-text-field';

describe('UiTextField', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiTextField],
    }).compileComponents();
  });

  it('emits value changes from the input', () => {
    const fixture = TestBed.createComponent(UiTextField);
    const changes: string[] = [];

    fixture.componentRef.setInput('id', 'contact-name');
    fixture.componentRef.setInput('label', 'Name');
    fixture.componentInstance.valueChange.subscribe((value) => {
      changes.push(value);
    });
    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector('input') as HTMLInputElement;
    input.value = 'Joao';
    input.dispatchEvent(new Event('input'));

    expect(changes).toEqual(['Joao']);
  });
});
