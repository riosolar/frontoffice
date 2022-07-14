import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ExchangeComponent } from './components/exchange/exchange.component';

const routes: Routes = [
    { path: '', component: ExchangeComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExchangeRoutingModule { }
