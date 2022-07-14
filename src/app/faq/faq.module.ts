import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './components/faq/faq.component';

@NgModule({
    declarations: [FaqComponent],
    imports: [CommonModule, FaqRoutingModule],
    exports: [],
    providers: [],
})
export class FaqModule { }