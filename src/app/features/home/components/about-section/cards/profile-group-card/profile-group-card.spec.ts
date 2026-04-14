import { TestBed } from '@angular/core/testing';
import { ProfileGroupCard } from './profile-group-card';

describe('ProfileGroupCard', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileGroupCard],
    }).compileComponents();
  });

  it('renders the title and each provided item', () => {
    const fixture = TestBed.createComponent(ProfileGroupCard);
    fixture.componentRef.setInput('title', 'Core strengths');
    fixture.componentRef.setInput('items', ['Architecture', 'Delivery', 'Scalability']);
    fixture.detectChanges();

    const host = fixture.nativeElement as HTMLElement;

    expect(host.querySelector('h3')?.textContent).toContain('Core strengths');
    expect(host.querySelectorAll('li').length).toBe(3);
    expect(host.textContent).toContain('Architecture');
  });
});
