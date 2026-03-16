import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CASE_STUDY_SLUGS } from '../data/case-study-previews.data';

export const caseStudyRouteGuard: CanActivateFn = (route) => {
  const router = inject(Router);
  const slug = route.paramMap.get('slug');

  if (!slug || !CASE_STUDY_SLUGS.has(slug)) {
    return router.createUrlTree(['/404']);
  }

  return true;
};
