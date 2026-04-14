import { TestBed } from '@angular/core/testing';
import { ExperienceCard } from './experience-card';

describe('ExperienceCard', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceCard],
    }).compileComponents();
  });

  it('renders the company, role, period, summary, and highlight list', () => {
    const fixture = TestBed.createComponent(ExperienceCard);
    fixture.componentRef.setInput('company', 'UFind');
    fixture.componentRef.setInput('role', 'Desenvolvedor Pleno');
    fixture.componentRef.setInput('period', 'Jun 2025 - atual');
    fixture.componentRef.setInput('summary', 'Liderança técnica em pipelines orientados a dados.');
    fixture.componentRef.setInput('highlights', [
      'IA orientada a dados',
      'Pipelines assíncronos em Node.js',
    ]);
    fixture.detectChanges();

    const host = fixture.nativeElement as HTMLElement;

    expect(host.querySelector('.experience-card__company')?.textContent).toContain('UFind');
    expect(host.querySelector('h3')?.textContent).toContain('Desenvolvedor Pleno');
    expect(host.querySelector('.experience-card__period')?.textContent).toContain('Jun 2025');
    expect(host.querySelector('.experience-card__summary')?.textContent).toContain(
      'pipelines orientados a dados',
    );
    expect(host.querySelectorAll('li').length).toBe(2);
  });
});
