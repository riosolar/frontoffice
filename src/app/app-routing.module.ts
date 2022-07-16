import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'exchange'
  },
  {
    path: 'exchange',
    loadChildren: () => import('./modules/exchange/exchange.module').then(m => m.ExchangeModule),
    data: {
      title: 'Обмен'
    }
  },
  {
    path: 'profile',
    loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule),
    canActivate: [AuthGuard],
    data: {
      title: 'Профиль'
    }
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./modules/terms/terms.module').then(m => m.TermsModule),
    data: {
      title: 'Пользовательское соглашение'
    }
  },
  {
    path: 'faq',
    loadChildren: () => import('./modules/faq/faq.module').then(m => m.FaqModule),
    data: {
      title: 'FAQ'
    }
  },
  {
    path: 'contacts',
    loadChildren: () => import('./modules/contacts/contacts.module').then(m => m.ContactsModule),
    data: {
      title: 'Контакты'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
