import { RenderMode, ServerRoute } from '@angular/ssr';
import { CASE_STUDIES } from './core/data/portfolio.data';
import { SUPPORTED_LANGUAGES } from './core/models/language.model';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: ':lang',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams(): Promise<Record<string, string>[]> {
      return SUPPORTED_LANGUAGES.map((language) => ({ lang: language }));
    },
  },
  {
    path: ':lang/work/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams(): Promise<Record<string, string>[]> {
      return SUPPORTED_LANGUAGES.flatMap((language) =>
        CASE_STUDIES.map((caseStudy) => ({
          lang: language,
          slug: caseStudy.slug,
        })),
      );
    },
  },
  {
    path: '404',
    renderMode: RenderMode.Prerender,
  },
  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];
