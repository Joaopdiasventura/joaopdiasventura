import { TestBed } from '@angular/core/testing';
import { ContentMetricList } from './content-metric-list';

describe('ContentMetricList', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentMetricList],
    }).compileComponents();
  });

  it('renders the metric items in a definition list', () => {
    const fixture = TestBed.createComponent(ContentMetricList);
    fixture.componentRef.setInput('items', [
      {
        label: 'Automated tests',
        value: '248',
      },
    ]);
    fixture.componentRef.setInput('templateColumns', 'repeat(3, minmax(0, 1fr))');
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('dt').length).toBe(1);
    expect(fixture.nativeElement.querySelectorAll('dd').length).toBe(1);
    expect(fixture.nativeElement.querySelector('dl')?.style.gridTemplateColumns).toContain(
      'repeat(3',
    );
  });
});
