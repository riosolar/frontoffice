import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginService } from './services/login.service';
import { RegisterService } from './services/register.service';
import { AuthContainerComponent } from './components/auth-container/auth-container.component';
import { TuiButtonModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiCheckboxLabeledModule, TuiInputModule, TuiInputPasswordModule } from '@taiga-ui/kit';

const TAIGA_IMPORTS = [
    TuiButtonModule,
    TuiInputModule,
    TuiCheckboxLabeledModule,
    TuiTextfieldControllerModule,
    TuiInputPasswordModule
];

@NgModule({
    declarations: [ LoginComponent, RegisterComponent, AuthContainerComponent ],
    imports: [ CommonModule, AuthRoutingModule, ...TAIGA_IMPORTS ],
    exports: [],
    providers: [LoginService, RegisterService],
})
export class AuthModule {}