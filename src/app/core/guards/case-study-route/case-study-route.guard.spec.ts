import { TestBed } from '@angular/core/testing';
import {
  ActivatedRouteSnapshot,
  Router,
  UrlTree,
  convertToParamMap,
  provideRouter,
} from '@angular/router';
import { CaseStudyRouteGuard } from './case-study-route.guard';

const routeWithSlug = (slug: string | null): ActivatedRouteSnapshot =>
  ({
    paramMap: convertToParamMap(slug ? { slug } : {}),
  }) as ActivatedRouteSnapshot;

describe('CaseStudyRouteGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CaseStudyRouteGuard, provideRouter([])],
    });
  });

  it('allows access when the slug belongs to a known case study', () => {
    const guard = TestBed.inject(CaseStudyRouteGuard);
    const result = guard.canActivate(routeWithSlug('ggc'));

    expect(result).toBe(true);
  });

  it('redirects to /404 when the slug is missing or invalid', () => {
    const guard = TestBed.inject(CaseStudyRouteGuard);
    const router = TestBed.inject(Router);

    const result = guard.canActivate(routeWithSlug('invalid-slug'));

    expect(router.serializeUrl(result as UrlTree)).toBe('/404');
  });
});
