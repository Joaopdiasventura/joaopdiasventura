import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, Router } from '@angular/router';
import { CASE_STUDY_SLUGS } from '../../data/case-study-previews.data';

@Injectable({ providedIn: 'root' })
export class CaseStudyRouteGuard implements CanActivate {
  private readonly router = inject(Router);

  public canActivate(route: ActivatedRouteSnapshot): GuardResult {
    const slug = route.paramMap.get('slug');
    return !slug || !CASE_STUDY_SLUGS.has(slug) ? this.router.createUrlTree(['/404']) : true;
  }
}
