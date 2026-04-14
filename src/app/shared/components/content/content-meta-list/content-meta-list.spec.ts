import { TestBed } from '@angular/core/testing';
import { ContentMetaList } from './content-meta-list';

describe('ContentMetaList', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentMetaList],
    }).compileComponents();
  });

  it('renders links and plain values from the provided items', () => {
    const fixture = TestBed.createComponent(ContentMetaList);
    fixture.componentRef.setInput('items', [
      {
        external: true,
        href: 'https://example.com',
        label: 'Repository',
        value: 'github.com/example/project',
      },
      {
        label: 'Location',
        value: 'Sao Paulo, Brazil',
      },
    ]);
    fixture.detectChanges();

    const host = fixture.nativeElement as HTMLElement;
    const link = host.querySelector('a');
    const strong = host.querySelector('strong');

    expect(link?.textContent).toContain('github.com/example/project');
    expect(link?.getAttribute('target')).toBe('_blank');
    expect(strong?.textContent).toContain('Sao Paulo, Brazil');
  });
});
