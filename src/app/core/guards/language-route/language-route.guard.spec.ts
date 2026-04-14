import { TestBed } from '@angular/core/testing';
import {
  ActivatedRouteSnapshot,
  Router,
  UrlTree,
  convertToParamMap,
  provideRouter,
} from '@angular/router';
import { Language } from '../../models/language.model';
import { LanguageService } from '../../services/language/language.service';
import { LanguageRouteGuard } from './language-route.guard';

const routeWithLanguage = (lang: string | null): ActivatedRouteSnapshot =>
  ({
    paramMap: convertToParamMap(lang ? { lang } : {}),
  }) as ActivatedRouteSnapshot;

describe('LanguageRouteGuard', () => {
  let appliedLanguage: Language | null;

  beforeEach(() => {
    appliedLanguage = null;

    TestBed.configureTestingModule({
      providers: [
        LanguageRouteGuard,
        provideRouter([]),
        {
          provide: LanguageService,
          useValue: {
            setLanguage: async (language: Language): Promise<void> => {
              appliedLanguage = language;
            },
            supportedLanguage: (language: string | null): language is Language =>
              language == 'en' || language == 'pt',
          },
        },
      ],
    });
  });

  it('allows access and applies the route language when the parameter is supported', async () => {
    const guard = TestBed.inject(LanguageRouteGuard);

    const result = await guard.canActivate(routeWithLanguage('pt'));

    expect(result).toBe(true);
    expect(appliedLanguage).toBe('pt');
  });

  it('redirects to /404 when the route language is unsupported', async () => {
    const guard = TestBed.inject(LanguageRouteGuard);
    const router = TestBed.inject(Router);

    const result = await guard.canActivate(routeWithLanguage('es'));

    expect(router.serializeUrl(result as UrlTree)).toBe('/404');
    expect(appliedLanguage).toBeNull();
  });
});
