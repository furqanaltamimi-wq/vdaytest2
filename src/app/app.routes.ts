import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'valentine',
    loadComponent: () =>
      import('./valentine-game/valentine-game.component').then(
        (m) => m.ValentineGameComponent
      ),
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: '',
    redirectTo: '/valentine',
    pathMatch: 'full',
  },
];
