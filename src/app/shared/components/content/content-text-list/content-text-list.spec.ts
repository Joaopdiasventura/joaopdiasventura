import { TestBed } from '@angular/core/testing';
import { ContentTextList } from './content-text-list';

describe('ContentTextList', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentTextList],
    }).compileComponents();
  });

  it('renders every item and applies the selected variant class', () => {
    const fixture = TestBed.createComponent(ContentTextList);
    fixture.componentRef.setInput('items', ['Node.js', 'Angular', 'OpenAI']);
    fixture.componentRef.setInput('variant', 'stack');
    fixture.detectChanges();

    const list = fixture.nativeElement.querySelector('.content-text-list');

    expect(list?.classList.contains('content-text-list--stack')).toBe(true);
    expect(fixture.nativeElement.querySelectorAll('li').length).toBe(3);
    expect(fixture.nativeElement.textContent).toContain('OpenAI');
  });
});
