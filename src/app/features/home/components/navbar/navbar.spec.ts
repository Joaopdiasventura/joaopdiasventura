import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Navbar } from './navbar';

describe('Navbar', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(Navbar);
    const instance = fixture.componentInstance;
    expect(instance).toBeTruthy();
  });

  it('renders the brand link and both desktop and mobile navigation entries', () => {
    const fixture = TestBed.createComponent(Navbar);
    fixture.detectChanges();

    const host = fixture.nativeElement as HTMLElement;
    const instance = fixture.componentInstance;

    expect(host.querySelector('.navbar__brand')?.getAttribute('href')).toBe(instance.homeHref());
    expect(host.querySelectorAll('.navbar__link').length).toBe(instance.navItems.length);
    expect(host.querySelectorAll('.mobile-menu__link').length).toBe(instance.navItems.length);
  });

  it('toggles the mobile menu state from the menu button', () => {
    const fixture = TestBed.createComponent(Navbar);
    fixture.detectChanges();

    const host = fixture.nativeElement as HTMLElement;
    const button = host.querySelector<HTMLButtonElement>('.navbar__menu-toggle');
    const menu = host.querySelector<HTMLElement>('.mobile-menu');

    expect(button).not.toBeNull();
    expect(menu?.classList.contains('mobile-menu--open')).toBe(false);

    button?.click();
    fixture.detectChanges();

    expect(menu?.classList.contains('mobile-menu--open')).toBe(true);
    expect(button?.getAttribute('aria-expanded')).toBe('true');
  });
});
