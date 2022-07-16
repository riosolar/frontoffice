import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './components/contacts/contacts.component';

@NgModule({
    declarations: [ContactsComponent],
    imports: [CommonModule, ContactsRoutingModule],
    exports: [],
    providers: [],
})
export class ContactsModule { }