import { TestBed } from '@angular/core/testing';
import { SkillsSection } from './skills-section';

describe('SkillsSection', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsSection],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(SkillsSection);
    const instance = fixture.componentInstance;
    expect(instance).toBeTruthy();
  });
});
