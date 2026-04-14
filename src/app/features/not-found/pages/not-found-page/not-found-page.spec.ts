import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { NotFoundPage } from './not-found-page';

describe('NotFoundPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFoundPage],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(NotFoundPage);
    const instance = fixture.componentInstance;
    expect(instance).toBeTruthy();
  });

  it('renders the shared CTA button back to the localized home route', () => {
    const fixture = TestBed.createComponent(NotFoundPage);
    fixture.detectChanges();

    const host = fixture.nativeElement as HTMLElement;

    expect(host.querySelector('h1')?.textContent).toContain('404');
    expect(host.querySelector('app-ui-button.not-found__action')).not.toBeNull();
  });
});
