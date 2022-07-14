import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './components/contacts/contacts.component';

const routes: Routes = [
    { path: '', component: ContactsComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactsRoutingModule { }
