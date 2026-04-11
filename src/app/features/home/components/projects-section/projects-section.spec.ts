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

  it('renders the five projects extracted from the README dataset', () => {
    const fixture = TestBed.createComponent(ProjectsSection);
    fixture.detectChanges();

    const cards = fixture.nativeElement.querySelectorAll('.project-card');
    expect(cards.length).toBe(5);
  });
});
