import { TestBed } from '@angular/core/testing';
import { UiIconLink } from './ui-icon-link';

describe('UiIconLink', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiIconLink],
    }).compileComponents();
  });

  it('renders the configured icon link', () => {
    const fixture = TestBed.createComponent(UiIconLink);
    fixture.componentRef.setInput('ariaLabel', 'GitHub');
    fixture.componentRef.setInput('href', 'https://github.com/example');
    fixture.componentRef.setInput('iconSrc', '/assets/icons/github.svg');
    fixture.detectChanges();

    const anchor = fixture.nativeElement.querySelector('a');
    const image = fixture.nativeElement.querySelector('img');

    expect(anchor?.getAttribute('aria-label')).toBe('GitHub');
    expect(anchor?.getAttribute('href')).toBe('https://github.com/example');
    expect(image?.getAttribute('src')).toContain('/assets/icons/github.svg');
  });
});
