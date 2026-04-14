import { Routes } from '@angular/router';
import { DEFAULT_LANGUAGE } from './core/models/language.model';
import { LanguageRouteGuard } from './core/guards/language-route/language-route.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: DEFAULT_LANGUAGE,
  },
  {
    path: '404',
    loadComponent: () =>
      import('./features/not-found/pages/not-found-page/not-found-page').then(
        (module) => module.NotFoundPage,
      ),
    title: '404 | João Paulo Dias Ventura',
  },
  {
    path: ':lang',
    canActivate: [LanguageRouteGuard],
    loadChildren: () =>
      import('./features/home/home.routes').then((module) => module.HOME_ROUTES),
  },
  {
    path: '**',
    redirectTo: '404',
  },
];
