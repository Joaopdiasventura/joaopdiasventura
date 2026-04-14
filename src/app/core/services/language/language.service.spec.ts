import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { LanguageService } from './language.service';

describe('LanguageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('updates the active language, html lang, and CV path', async () => {
    const service = TestBed.inject(LanguageService);
    const document = TestBed.inject(DOCUMENT);

    await service.setLanguage('pt');
    TestBed.flushEffects();

    expect(service.language()).toBe('pt');
    expect(service.cvPath()).toBe('/cv/CV_JoaoPaulo_PT.pdf');
    expect(document.documentElement.lang).toBe('pt-BR');
    expect(service.sectionHref('projects')).toBe('/pt#projects');
  });
});
