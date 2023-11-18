import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/first',
    pathMatch: 'full',
  },
  {
    path: 'buttons',
    loadComponent: () => import('./buttons/buttons.component'),
  },
  {
    path: '**',
    loadComponent: () => import('./error/error.component'),
  },
];
