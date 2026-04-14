import { TestBed } from '@angular/core/testing';
import { Footer } from './footer';

describe('Footer', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(Footer);
    const instance = fixture.componentInstance;
    expect(instance).toBeTruthy();
  });

  it('renders the three social icon links through the shared icon component', () => {
    const fixture = TestBed.createComponent(Footer);
    fixture.detectChanges();

    const host = fixture.nativeElement as HTMLElement;

    expect(host.querySelectorAll('app-ui-icon-link').length).toBe(3);
    expect(host.querySelectorAll('app-ui-icon-link a').length).toBe(3);
  });
});
