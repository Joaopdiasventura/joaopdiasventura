import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LanguageService } from '../services/language.service';

export const languageRouteGuard: CanActivateFn = async (route) => {
  const languageService = inject(LanguageService);
  const router = inject(Router);

  const languageParam = route.paramMap.get('lang');
  if (!languageService.supportedLanguage(languageParam)) {
    return router.createUrlTree(['/404']);
  }

  await languageService.setLanguage(languageParam);
  return true;
};
