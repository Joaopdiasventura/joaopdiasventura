import { TestBed } from '@angular/core/testing';
import { UiTextareaField } from './ui-textarea-field';

describe('UiTextareaField', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiTextareaField],
    }).compileComponents();
  });

  it('renders the configured textarea', () => {
    const fixture = TestBed.createComponent(UiTextareaField);
    fixture.componentRef.setInput('id', 'contact-message');
    fixture.componentRef.setInput('label', 'Message');
    fixture.componentRef.setInput('value', 'Hello');
    fixture.detectChanges();

    const textarea = fixture.nativeElement.querySelector('textarea') as HTMLTextAreaElement;
    expect(textarea.value).toBe('Hello');
  });
});
