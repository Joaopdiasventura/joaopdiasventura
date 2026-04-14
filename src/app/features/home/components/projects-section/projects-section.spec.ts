import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { vi } from 'vitest';
import { ProjectsSection } from './projects-section';

class MockIntersectionObserver {
  public static instances: MockIntersectionObserver[] = [];

  public readonly observedElements: Element[] = [];
  public readonly disconnect = vi.fn();
  public readonly observe = vi.fn((element: Element) => {
    this.observedElements.push(element);
  });
  public readonly root = null;
  public readonly rootMargin = '0px';
  public readonly takeRecords = vi.fn(() => []);
  public readonly thresholds = [0];
  public readonly unobserve = vi.fn();

  public constructor(private readonly callback: IntersectionObserverCallback) {
    MockIntersectionObserver.instances.push(this);
  }

  public static reset(): void {
    MockIntersectionObserver.instances = [];
  }

  public trigger(target: Element, isIntersecting: boolean): void {
    this.callback(
      [
        {
          intersectionRatio: isIntersecting ? 1 : 0,
          isIntersecting,
          target,
        } as IntersectionObserverEntry,
      ],
      this as unknown as IntersectionObserver,
    );
  }
}

const projectsSectionObserver = (host: HTMLElement): MockIntersectionObserver | undefined => {
  const section = host.querySelector('.projects');

  return MockIntersectionObserver.instances.find((observer) =>
    section ? observer.observedElements.includes(section) : false,
  );
};

describe('ProjectsSection', () => {
  const originalIntersectionObserver = globalThis.IntersectionObserver;

  beforeEach(async () => {
    MockIntersectionObserver.reset();
    Object.defineProperty(globalThis, 'IntersectionObserver', {
      configurable: true,
      writable: true,
      value: MockIntersectionObserver,
    });

    await TestBed.configureTestingModule({
      imports: [ProjectsSection],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  afterEach(() => {
    if (originalIntersectionObserver) {
      Object.defineProperty(globalThis, 'IntersectionObserver', {
        configurable: true,
        writable: true,
        value: originalIntersectionObserver,
      });
      return;
    }

    Reflect.deleteProperty(globalThis, 'IntersectionObserver');
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

  it('renders a compact narrative for each project card', () => {
    const fixture = TestBed.createComponent(ProjectsSection);
    fixture.detectChanges();

    const host = fixture.nativeElement as HTMLElement;
    projectsSectionObserver(host)?.trigger(host.querySelector('.projects') as HTMLElement, true);
    fixture.detectChanges();

    const cards = Array.from(host.querySelectorAll<HTMLElement>('.project-card'));
    const icons = host.querySelectorAll('.project-card__icon img');
    const tiltedCards = host.querySelectorAll('.project-card.viewport-tilt');

    expect(cards.length).toBe(5);
    expect(icons.length).toBe(5);
    expect(tiltedCards.length).toBe(5);

    for (const card of cards) {
      expect(card.querySelectorAll('.project-card__story-item').length).toBe(2);
      expect(card.querySelector('.project-card__icon img')).not.toBeNull();
      expect(card.querySelector('.project-card__result')).not.toBeNull();
      expect(card.querySelector('.project-card__case-button')).not.toBeNull();
      expect(card.querySelector('.project-card__stack-note')).not.toBeNull();
      expect(card.querySelector('.project-card__overlay-link')).not.toBeNull();
    }
  });

  it('renders project images only after the section enters the viewport', () => {
    const fixture = TestBed.createComponent(ProjectsSection);
    fixture.detectChanges();

    const host = fixture.nativeElement as HTMLElement;
    const section = host.querySelector('.projects');
    const sectionObserver = projectsSectionObserver(host);

    expect(section).not.toBeNull();
    expect(sectionObserver).toBeDefined();
    expect(host.querySelectorAll('.project-card__media img').length).toBe(0);
    expect(host.querySelectorAll('.project-card__icon img').length).toBe(0);

    sectionObserver?.trigger(section as HTMLElement, true);
    fixture.detectChanges();

    expect(host.querySelectorAll('.project-card__media img').length).toBe(5);
    expect(host.querySelectorAll('.project-card__icon img').length).toBe(5);
    expect(sectionObserver?.disconnect).toHaveBeenCalled();
  });
});
