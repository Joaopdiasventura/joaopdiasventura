import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HeroSection } from './hero-section';

describe('HeroSection', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSection],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HeroSection);
    const instance = fixture.componentInstance;
    expect(instance).toBeTruthy();
  });

  it('renders the three hero CTAs through the shared button component', () => {
    const fixture = TestBed.createComponent(HeroSection);
    fixture.detectChanges();

    const host = fixture.nativeElement as HTMLElement;
    const portrait = host.querySelector<HTMLImageElement>('.hero__portrait-media img');

    expect(host.querySelector('#hero-title')).not.toBeNull();
    expect(host.querySelectorAll('app-ui-button').length).toBe(3);
    expect(portrait?.getAttribute('loading')).toBe('eager');
    expect(portrait?.getAttribute('decoding')).toBe('sync');
    expect(portrait?.getAttribute('sizes')).toBe('(min-width: 1200px) 18rem, 16rem');
    expect(portrait?.getAttribute('srcset')).toContain('/assets/profile-384.webp 384w');
  });
});
