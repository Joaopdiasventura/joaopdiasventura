import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CASE_STUDIES } from '../data/portfolio.data';

const CASE_STUDY_SLUGS = new Set<string>(CASE_STUDIES.map((caseStudy) => caseStudy.slug));

export const caseStudyRouteGuard: CanActivateFn = (route) => {
  const router = inject(Router);
  const slug = route.paramMap.get('slug');

  if (!slug || !CASE_STUDY_SLUGS.has(slug)) {
    return router.createUrlTree(['/404']);
  }

  return true;
};
