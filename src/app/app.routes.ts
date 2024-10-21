import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./pages/signin/signin.page').then((m) => m.SigninPage),
  },
  {
    path: 'resetpassword',
    loadComponent: () =>
      import('./pages/resetpassword/resetpassword.page').then(
        (m) => m.ResetpasswordPage
      ),
  },
  {
    path: 'landing',
    loadComponent: () =>
      import('./pages/landing/landing.page').then((m) => m.LandingPage),
  },
];
