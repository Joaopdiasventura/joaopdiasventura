import { TestBed } from '@angular/core/testing';
import { ExperienceSection } from './experience-section';

describe('ExperienceSection', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceSection],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ExperienceSection);
    const instance = fixture.componentInstance;
    expect(instance).toBeTruthy();
  });

  it('renders the shared section heading and three experience cards', () => {
    const fixture = TestBed.createComponent(ExperienceSection);
    fixture.detectChanges();

    const host = fixture.nativeElement as HTMLElement;

    expect(host.querySelector('#experience-title')?.textContent).toContain('Delivery');
    expect(host.querySelectorAll('app-experience-card').length).toBe(3);
    expect(host.querySelectorAll('.timeline__item').length).toBe(3);
  });
});
