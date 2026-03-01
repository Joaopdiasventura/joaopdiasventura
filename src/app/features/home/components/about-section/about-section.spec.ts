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
});
