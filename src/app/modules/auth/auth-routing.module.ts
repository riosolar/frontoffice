import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthContainerComponent } from './components/auth-container/auth-container.component';

const routes: Routes = [
    {
        path: '',
        component: AuthContainerComponent,
        children: [
            { path: 'login', component: LoginComponent, data: { title: 'Вход' } },
            { path: 'register', component: RegisterComponent, data: { title: 'Регистрация' } },
        ]
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
