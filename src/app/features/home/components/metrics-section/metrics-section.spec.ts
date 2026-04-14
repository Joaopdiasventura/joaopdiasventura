import { TestBed } from '@angular/core/testing';
import { MetricsSection } from './metrics-section';

describe('MetricsSection', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetricsSection],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(MetricsSection);
    const instance = fixture.componentInstance;
    expect(instance).toBeTruthy();
  });

  it('renders one impact card per configured metric with the localized aria label', () => {
    const fixture = TestBed.createComponent(MetricsSection);
    fixture.detectChanges();

    const host = fixture.nativeElement as HTMLElement;
    const instance = fixture.componentInstance;
    const section = host.querySelector('.impact-strip');

    expect(section?.getAttribute('aria-label')).toBe(instance.copy(instance.ariaLabel));
    expect(host.querySelectorAll('app-impact-metric-card').length).toBe(instance.metrics.length);
  });
});
