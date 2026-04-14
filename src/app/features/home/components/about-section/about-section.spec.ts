import { TestBed } from '@angular/core/testing';
import { AboutSection } from './about-section';

describe('AboutSection', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutSection],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(AboutSection);
    const instance = fixture.componentInstance;
    expect(instance).toBeTruthy();
  });

  it('renders the statement, metadata, and one group card per configured group', () => {
    const fixture = TestBed.createComponent(AboutSection);
    fixture.detectChanges();

    const host = fixture.nativeElement as HTMLElement;
    const instance = fixture.componentInstance;

    expect(host.querySelector('#about-title')).not.toBeNull();
    expect(host.querySelector('app-profile-statement-card')).not.toBeNull();
    expect(host.querySelector('app-profile-meta-card')).not.toBeNull();
    expect(host.querySelectorAll('app-profile-group-card').length).toBe(instance.content.groups.length);
  });
});
