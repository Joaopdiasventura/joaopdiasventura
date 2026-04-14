import { TestBed } from '@angular/core/testing';
import { ImpactMetricCard } from './impact-metric-card';

describe('ImpactMetricCard', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpactMetricCard],
    }).compileComponents();
  });

  it('renders the metric value before the label through the shared metric list', () => {
    const fixture = TestBed.createComponent(ImpactMetricCard);
    fixture.componentRef.setInput('label', 'Data processed');
    fixture.componentRef.setInput('value', '+16 GB');
    fixture.detectChanges();

    const host = fixture.nativeElement as HTMLElement;

    expect(host.querySelector('dd')?.textContent).toContain('+16 GB');
    expect(host.querySelector('dt')?.textContent).toContain('Data processed');
  });
});
