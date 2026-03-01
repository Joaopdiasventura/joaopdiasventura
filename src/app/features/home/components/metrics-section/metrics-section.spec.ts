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
});
