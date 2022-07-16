import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './components/faq/faq.component';
import { TuiAccordionModule } from '@taiga-ui/kit';

const TAIGA_IMPORTS = [
    TuiAccordionModule
]

@NgModule({
    declarations: [FaqComponent],
    imports: [CommonModule, FaqRoutingModule, ...TAIGA_IMPORTS],
    exports: [],
    providers: [],
})
export class FaqModule { }