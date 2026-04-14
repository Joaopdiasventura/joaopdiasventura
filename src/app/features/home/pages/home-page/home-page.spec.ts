import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HomePage } from './home-page';

describe('HomePage', () => {
  beforeEach(async () => {
    Object.defineProperty(window, 'requestIdleCallback', {
      configurable: true,
      value: () => 1,
    });
    Object.defineProperty(window, 'cancelIdleCallback', {
      configurable: true,
      value: () => undefined,
    });

    await TestBed.configureTestingModule({
      imports: [HomePage],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HomePage);
    const instance = fixture.componentInstance;
    expect(instance).toBeTruthy();
  });

  it('renders the streamlined home sections without standalone skills or education sections', () => {
    const fixture = TestBed.createComponent(HomePage);
    fixture.detectChanges();

    const host = fixture.nativeElement as HTMLElement;

    expect(host.querySelector('app-hero-section')).not.toBeNull();
    expect(host.querySelector('app-metrics-section')).not.toBeNull();
    expect(host.querySelector('app-about-section')).not.toBeNull();
    expect(host.querySelector('app-projects-section')).not.toBeNull();
    expect(host.querySelector('app-experience-section')).not.toBeNull();
    expect(host.querySelector('app-contact-section')).not.toBeNull();
    expect(host.querySelector('app-skills-section')).toBeNull();
    expect(host.querySelector('app-education-section')).toBeNull();
  });
});
