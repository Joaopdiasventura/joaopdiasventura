import { TestBed } from '@angular/core/testing';
import { ProfileStatementCard } from './profile-statement-card';

describe('ProfileStatementCard', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileStatementCard],
    }).compileComponents();
  });

  it('renders the provided profile statement', () => {
    const fixture = TestBed.createComponent(ProfileStatementCard);
    fixture.componentRef.setInput(
      'text',
      'Frontend systems engineer focused on scalability, UX clarity, and delivery.',
    );
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('p')?.textContent).toContain(
      'Frontend systems engineer focused on scalability',
    );
  });
});
