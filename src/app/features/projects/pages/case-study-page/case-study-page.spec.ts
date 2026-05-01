import { convertToParamMap, ActivatedRoute, provideRouter } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CaseStudyPage } from './case-study-page';

describe('CaseStudyPage', () => {
  beforeEach(async () => {
    Object.defineProperty(window, 'requestIdleCallback', {
      configurable: true,
      value: () => 1,
    });
    Object.defineProperty(window, 'cancelIdleCallback', {
      configurable: true,
      value: () => undefined,
    });
    Object.defineProperty(window, 'scrollTo', {
      configurable: true,
      value: () => undefined,
    });

    await TestBed.configureTestingModule({
      imports: [CaseStudyPage],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(convertToParamMap({ slug: 'ggc' })),
          },
        },
      ],
    }).compileComponents();
  });

  it('renders hero, problem, solution, result, and next case sections', () => {
    const fixture = TestBed.createComponent(CaseStudyPage);
    fixture.detectChanges();

    const host = fixture.nativeElement as HTMLElement;
    const panelTitles = Array.from(
      host.querySelectorAll<HTMLElement>('.case-study-panel__title'),
    ).map((element) => element.textContent?.trim());
    const tiltedPanels = host.querySelectorAll(
      'app-case-study-panel.case-study__panel.viewport-tilt',
    );
    const cover = host.querySelector<HTMLImageElement>('.case-study__cover-frame img');

    expect(host.querySelector('.case-study__hero-title')?.textContent).toContain('GGCompress');
    expect(host.querySelector('.case-study__hero-icon img')).not.toBeNull();
    expect(cover).not.toBeNull();
    expect(cover?.getAttribute('srcset')).toContain(
      '/assets/projects/covers/ggc/ggc-960.webp 960w',
    );
    expect(host.querySelector('.case-study__next-icon img')).not.toBeNull();
    expect(panelTitles).toEqual(['Problem', 'Solution', 'Result']);
    expect(tiltedPanels.length).toBe(5);
    expect(host.querySelector('.case-study__next.viewport-tilt')).not.toBeNull();
    expect(
      host.querySelectorAll('.case-study__hero-metrics .content-metric-list__item').length,
    ).toBe(3);
    expect(host.querySelector('.case-study__next-button')).not.toBeNull();
    expect(host.querySelector('.case-study__next')).not.toBeNull();
    expect(host.querySelector('.case-study__next h2')?.textContent).toContain('VOX');
  });
});
