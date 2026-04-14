import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { UiButton } from './ui-button';

describe('UiButton', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiButton],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('renders an anchor when href is provided', () => {
    const fixture = TestBed.createComponent(UiButton);
    fixture.componentRef.setInput('href', 'https://example.com');
    fixture.componentRef.setInput('label', 'Open project');
    fixture.detectChanges();

    const anchor = fixture.nativeElement.querySelector('a');
    expect(anchor?.textContent).toContain('Open project');
    expect(anchor?.getAttribute('href')).toBe('https://example.com');
  });

  it('renders a button when href and routerLink are absent', () => {
    const fixture = TestBed.createComponent(UiButton);
    fixture.componentRef.setInput('label', 'Send');
    fixture.componentRef.setInput('type', 'submit');
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button');
    expect(button?.textContent).toContain('Send');
    expect(button?.getAttribute('type')).toBe('submit');
  });
});
