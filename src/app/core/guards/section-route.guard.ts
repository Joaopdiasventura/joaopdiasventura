import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { NAV_ITEMS } from '../data/portfolio.data';

const NAV_SECTIONS = new Set<string>(NAV_ITEMS.map((item) => item.id));

export const sectionRouteGuard: CanActivateFn = (route) => {
  const router = inject(Router);
  const sectionParam = route.paramMap.get('section');

  if (!sectionParam || !NAV_SECTIONS.has(sectionParam)) {
    return router.createUrlTree(['/404']);
  }

  return true;
};
