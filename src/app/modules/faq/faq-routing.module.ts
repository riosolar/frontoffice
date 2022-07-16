import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './components/faq/faq.component';

const routes: Routes = [
    { path: '', component: FaqComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FaqRoutingModule { }
