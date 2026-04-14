import { DeferBlockBehavior, DeferBlockState, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HomePage } from './home-page';

class MockIntersectionObserver {
  public readonly disconnect = (): void => undefined;
  public readonly observe = (): void => undefined;
  public readonly root = null;
  public readonly rootMargin = '0px';
  public readonly takeRecords = (): IntersectionObserverEntry[] => [];
  public readonly thresholds = [0];
  public readonly unobserve = (): void => undefined;
}

describe('HomePage', () => {
  const originalIntersectionObserver = globalThis.IntersectionObserver;

  beforeEach(async () => {
    Object.defineProperty(window, 'requestIdleCallback', {
      configurable: true,
      value: () => 1,
    });
    Object.defineProperty(window, 'cancelIdleCallback', {
      configurable: true,
      value: () => undefined,
    });
    Object.defineProperty(globalThis, 'IntersectionObserver', {
      configurable: true,
      writable: true,
      value: MockIntersectionObserver,
    });

    await TestBed.configureTestingModule({
      imports: [HomePage],
      providers: [provideRouter([])],
      deferBlockBehavior: DeferBlockBehavior.Manual,
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
    const fixture = TestBed.createComponent(HomePage);
    const instance = fixture.componentInstance;
    expect(instance).toBeTruthy();
  });

  it('renders the streamlined home sections without standalone skills or education sections', async () => {
    const fixture = TestBed.createComponent(HomePage);
    fixture.detectChanges();

    const deferBlocks = await fixture.getDeferBlocks();
    await Promise.all(deferBlocks.map((block) => block.render(DeferBlockState.Complete)));
    fixture.detectChanges();

    const host = fixture.nativeElement as HTMLElement;

    expect(host.querySelector('app-hero-section')).not.toBeNull();
    expect(host.querySelector('app-metrics-section')).not.toBeNull();
    expect(host.querySelector('app-about-section')).not.toBeNull();
    expect(host.querySelector('app-projects-section')).not.toBeNull();
    expect(host.querySelector('app-experience-section')).not.toBeNull();
    expect(host.querySelector('app-contact-section')).not.toBeNull();
    expect(host.querySelector('app-footer')).not.toBeNull();
    expect(host.querySelector('app-skills-section')).toBeNull();
    expect(host.querySelector('app-education-section')).toBeNull();
  });
});
