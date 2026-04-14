import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ProjectCard, ProjectCardViewModel } from './project-card';

const buildProject = (overrides: Partial<ProjectCardViewModel> = {}): ProjectCardViewModel => ({
  caseActionLabel: 'Open case study',
  caseRoute: ['/', 'en', 'projects', 'auronix'],
  category: 'AI Platform',
  coverAlt: 'Project cover',
  coverSrc: '/assets/projects/auronix-cover.webp',
  imageSizes: '100vw',
  iconHeight: 48,
  iconSrc: '/assets/projects/auronix-icon.svg',
  iconWidth: 48,
  imagesReady: false,
  indexLabel: '01',
  metric: {
    label: 'Latency',
    value: '-42%',
  },
  name: 'Auronix',
  primaryActionHref: 'https://example.com/live',
  primaryActionLabel: 'Open live project',
  problemLabel: 'Problem',
  problem: 'Legacy manual workflows.',
  resultLabel: 'Result',
  solutionLabel: 'Solution',
  solution: 'Automated processing pipeline.',
  stackLabel: 'Stack',
  stackSummary: 'Angular / Node.js / OpenAI',
  theme: 'auronix',
  titleId: 'project-auronix-title',
  ...overrides,
});

describe('ProjectCard', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCard],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('renders the project narrative, metric, and case study CTA when a case route exists', () => {
    const fixture = TestBed.createComponent(ProjectCard);
    fixture.componentRef.setInput('project', buildProject());
    fixture.detectChanges();

    const host = fixture.nativeElement as HTMLElement;

    expect(host.querySelector('h3')?.textContent).toContain('Auronix');
    expect(host.querySelectorAll('.project-card__story-item').length).toBe(2);
    expect(host.querySelector('.project-card__result')?.textContent).toContain('-42%');
    expect(host.querySelector('.project-card__case-button')).not.toBeNull();
    expect(host.querySelector('.project-card__overlay-link')).not.toBeNull();
  });

  it('falls back to the external project link when there is no case study route', () => {
    const fixture = TestBed.createComponent(ProjectCard);
    fixture.componentRef.setInput(
      'project',
      buildProject({
        caseRoute: null,
        metric: null,
      }),
    );
    fixture.detectChanges();

    const host = fixture.nativeElement as HTMLElement;
    const overlayLink = host.querySelector<HTMLAnchorElement>('.project-card__overlay-link');

    expect(overlayLink?.getAttribute('href')).toContain('https://example.com/live');
    expect(overlayLink?.getAttribute('target')).toBe('_blank');
    expect(host.querySelector('.project-card__case-button')).toBeNull();
    expect(host.querySelector('.project-card__result')).toBeNull();
  });
});
