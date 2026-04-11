import { Routes } from '@angular/router';
import {PrivateLayoutComponent} from './private/_layout/private-layout/private-layout.component';

import {LayoutComponent} from './public/_layout/layout.component';
import {authGuard} from './shared/guards/auth.guard';
import {HomeComponent} from './private/pages/home/home.component';
import {FavoritesComponent} from './private/pages/favorites/favorites.component';
import {LogInComponent} from './public/pages/log-in/log-in.component';

export const routes: Routes = [
  {
    path: 'public',
    component: LayoutComponent,
    children: [
      {
        path: 'log-in',
        component: LogInComponent,
        title: 'Авторизация',
        data: {
          isShowSearch: false,
        },
      },
      {
        path: '**',
        redirectTo: 'log-in',
      },
    ],
  },
  {
    path: 'private',
    component: PrivateLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent,
        title: 'home',
        data: {
          isShowSearch: false,
        },
      },
      {
        path: 'favorites',
        component: FavoritesComponent,
        title: 'Избранное',
        data: {
          isShowSearch: false,
        },
      },


      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'public',
  },
];
