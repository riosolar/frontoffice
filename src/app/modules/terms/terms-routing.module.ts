import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TermsComponent } from './components/terms/terms.component';

const routes: Routes = [
    { path: '', component: TermsComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TermsRoutingModule { }
