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
    loadChildren: () => import('./modules/exchange/exchange.module').then(m => m.ExchangeModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./modules/terms/terms.module').then(m => m.TermsModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./modules/faq/faq.module').then(m => m.FaqModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./modules/contacts/contacts.module').then(m => m.ContactsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
