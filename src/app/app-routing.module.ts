import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// Importar Firebase Guards
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';

// Define redirecionadores
const toLogin = () => redirectUnauthorizedTo(['/user/login']); // Usuário  não logado
const isLogged = () => redirectLoggedInTo(['/perfiluser']); // Usuário logado

const routes: Routes = [
  // Rota da página inicial
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  // Página inicial
  {
    path: 'home',
    loadChildren: () =>
      import('./page/home/home.module').then((m) => m.HomePageModule),
  },

  // Página de contatos
  {
    path: 'contacts',
    loadChildren: () =>
      import('./page/contacts/contacts.module').then(
        (m) => m.ContactsPageModule
      ),
  },

  // Página sobre
  {
    path: 'about',
    loadChildren: () =>
      import('./page/about/about.module').then((m) => m.AboutPageModule),
  },

  {
    path: 'fimadotar/:petid',
    loadChildren: () => import('./page/fimadotar/fimadotar.module').then( m => m.FimadotarPageModule),
    },

    {
    path: 'perfilpet/:petid',
    loadChildren: () =>
      import('./page/perfilpet/perfilpet.module').then(
        (m) => m.PerfilpetPageModule
      ),
  },
  {
    path: 'perfiluser',
    loadChildren: () =>
      import('./page/perfiluser/perfiluser.module').then(
        (m) => m.PerfiluserPageModule
      ),
    // Só acessa se estiver logado
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: toLogin },
  },
  {
    path: 'adotar',
    loadChildren: () =>
      import('./page/adotar/adotar.module').then((m) => m.AdotarPageModule),
  },

  {
    path: 'logindoar',
    loadChildren: () =>
      import('./pages/logindoar/logindoar.module').then(
        (m) => m.LogindoarPageModule
      ),
    // Só acessa se estiver logado
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: toLogin },
  },
  {
    path: 'user/edit',
    loadChildren: () =>
      import('./user/edit/edit.module').then((m) => m.EditPageModule),
    // Só acessa se estiver logado
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: toLogin },
  },
  {
    path: 'user/login',
    loadChildren: () =>
      import('./user/login/login.module').then((m) => m.LoginPageModule),
    // Só acessa se estiver logado
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: isLogged },
  },
  {
    path: 'user/register',
    loadChildren: () =>
      import('./user/register/register.module').then(
        (m) => m.RegisterPageModule
      ),
    // Só acessa se estiver logado
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: toLogin },
  },
  {
    path: 'user/logout',
    loadChildren: () =>
      import('./user/logout/logout.module').then(
        (m) => m.LogoutPageModule
      ),
    // Só acessa se estiver logado
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: toLogin },
  },
  {
    path: 'user/profile',
    loadChildren: () =>
      import('./user/profile/profile.module').then((m) => m.ProfilePageModule),
    // Só acessa se estiver logado
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: toLogin },
  },
  {
    path: 'confadotar/:petid',
    loadChildren: () =>
      import('./page/confadotar/confadotar.module').then(
        (m) => m.ConfadotarPageModule
      ),
    // Só acessa se estiver logado
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: toLogin },
  },

  // Rota curinga (rotas inexistentes)
  // TEM QUE SER SEMPRE A ÚLTIMA ROTA
  {
    path: '**',
    loadChildren: () =>
      import('./page/e404/e404.module').then((m) => m.E404PageModule),
  },
  {
    path: 'fimadotar',
    loadChildren: () => import('./page/fimadotar/fimadotar.module').then( m => m.FimadotarPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
