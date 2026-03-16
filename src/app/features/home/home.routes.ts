import { Routes } from '@angular/router';
import { caseStudyRouteGuard } from '../../core/guards/case-study-route.guard';
import { HomePage } from './pages/home-page';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    component: HomePage,
    title: 'João Paulo Dias Ventura | Portfolio',
  },
  {
    path: 'work/:slug',
    canActivate: [caseStudyRouteGuard],
    loadComponent: () =>
      import('../work/pages/case-study-page').then((module) => module.CaseStudyPage),
    title: 'Case Study | João Paulo Dias Ventura',
  },
];
