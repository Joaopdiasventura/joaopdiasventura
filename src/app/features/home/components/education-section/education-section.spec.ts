import { TestBed } from '@angular/core/testing';
import { EducationSection } from './education-section';

describe('EducationSection', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationSection],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(EducationSection);
    const instance = fixture.componentInstance;
    expect(instance).toBeTruthy();
  });
});
