import { RenderMode, ServerRoute } from '@angular/ssr';
import { NAV_ITEMS } from './core/data/portfolio.data';
import { SUPPORTED_LANGUAGES } from './core/models/language.model';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: ':lang',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return SUPPORTED_LANGUAGES.map((language) => ({ lang: language }));
    },
  },
  {
    path: ':lang/:section',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return SUPPORTED_LANGUAGES.flatMap((language) =>
        NAV_ITEMS.map((item) => ({
          lang: language,
          section: item.id,
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
