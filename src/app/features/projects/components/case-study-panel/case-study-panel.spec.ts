import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { CaseStudyPanel } from './case-study-panel';

@Component({
  imports: [CaseStudyPanel],
  template: `
    <app-case-study-panel [title]="'Problem'" [lead]="'What had to be solved'">
      <p class="projected-copy">Projected body</p>
    </app-case-study-panel>
  `,
})
class TestHostComponent {}

describe('CaseStudyPanel', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();
  });

  it('renders title, lead, and projected content', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();

    const host = fixture.nativeElement as HTMLElement;

    expect(host.querySelector('.case-study-panel__title')?.textContent).toContain('Problem');
    expect(host.querySelector('.case-study-panel__lead')?.textContent).toContain(
      'What had to be solved',
    );
    expect(host.querySelector('.projected-copy')?.textContent).toContain('Projected body');
  });
});
