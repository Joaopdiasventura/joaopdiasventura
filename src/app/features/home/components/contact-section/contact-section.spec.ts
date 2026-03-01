import { provideHttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ContactSection } from './contact-section';

describe('ContactSection', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactSection],
      providers: [provideHttpClient()],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ContactSection);
    const instance = fixture.componentInstance;
    expect(instance).toBeTruthy();
  });
});
