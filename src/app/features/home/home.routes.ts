import { Routes } from '@angular/router';
import { sectionRouteGuard } from '../../core/guards/section-route.guard';
import { HomePage } from './pages/home-page';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    component: HomePage,
    title: 'Joao Paulo Dias Ventura | Portfolio',
  },
  {
    path: ':section',
    canActivate: [sectionRouteGuard],
    component: HomePage,
    title: 'Joao Paulo Dias Ventura | Portfolio',
  },
];
