import { TestBed } from '@angular/core/testing';
import { ContentSectionHeading } from './content-section-heading';

describe('ContentSectionHeading', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentSectionHeading],
    }).compileComponents();
  });

  it('renders eyebrow, title, and summary', () => {
    const fixture = TestBed.createComponent(ContentSectionHeading);
    fixture.componentRef.setInput('eyebrow', 'Projects');
    fixture.componentRef.setInput('summary', 'Summary');
    fixture.componentRef.setInput('title', 'Headline');
    fixture.componentRef.setInput('titleId', 'projects-title');
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('#projects-title')?.textContent).toContain('Headline');
    expect(fixture.nativeElement.textContent).toContain('Projects');
    expect(fixture.nativeElement.textContent).toContain('Summary');
  });
});
