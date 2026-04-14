import { Routes } from '@angular/router';
import { CaseStudyRouteGuard } from '../../core/guards/case-study-route/case-study-route.guard';
import { HomePage } from './pages/home-page/home-page';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    component: HomePage,
    title: 'João Paulo Dias Ventura | Portfolio',
  },
  {
    path: 'projects/:slug',
    canActivate: [CaseStudyRouteGuard],
    loadComponent: () =>
      import('../projects/pages/case-study-page/case-study-page').then(
        (module) => module.CaseStudyPage,
      ),
    title: 'Case Study | João Paulo Dias Ventura',
  },
];
