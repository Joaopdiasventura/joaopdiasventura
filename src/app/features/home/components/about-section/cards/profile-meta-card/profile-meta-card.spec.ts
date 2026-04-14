import { TestBed } from '@angular/core/testing';
import { ProfileMetaCard } from './profile-meta-card';

describe('ProfileMetaCard', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileMetaCard],
    }).compileComponents();
  });

  it('renders each metadata label and value', () => {
    const fixture = TestBed.createComponent(ProfileMetaCard);
    fixture.componentRef.setInput('items', [
      {
        label: 'Location',
        value: 'São Paulo',
      },
      {
        label: 'Email',
        value: 'joao@example.com',
      },
    ]);
    fixture.detectChanges();

    const host = fixture.nativeElement as HTMLElement;

    expect(host.querySelectorAll('.content-meta-list__label').length).toBe(2);
    expect(host.textContent).toContain('Location');
    expect(host.textContent).toContain('joao@example.com');
  });
});
