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
});
