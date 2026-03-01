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
});
