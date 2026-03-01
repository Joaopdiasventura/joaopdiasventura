import { TestBed } from '@angular/core/testing';
import { ProjectsSection } from './projects-section';

describe('ProjectsSection', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsSection],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ProjectsSection);
    const instance = fixture.componentInstance;
    expect(instance).toBeTruthy();
  });
});
