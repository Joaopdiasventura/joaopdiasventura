import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, Router } from '@angular/router';
import { LanguageService } from '../../services/language/language.service';

@Injectable({ providedIn: 'root' })
export class LanguageRouteGuard implements CanActivate {
  private readonly languageService = inject(LanguageService);
  private readonly router = inject(Router);

  public async canActivate(route: ActivatedRouteSnapshot): Promise<GuardResult> {
    const languageParam = route.paramMap.get('lang');

    if (!this.languageService.supportedLanguage(languageParam))
      return this.router.createUrlTree(['/404']);

    await this.languageService.setLanguage(languageParam);
    return true;
  }
}
