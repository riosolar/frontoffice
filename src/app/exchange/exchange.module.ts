import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExchangeRoutingModule } from './exchange-routing.module';
import { ExchangeService } from './services/exchange.service';
import { TuiButtonModule, TuiDataListModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiInputCardModule } from '@taiga-ui/addon-commerce';
import { TuiCheckboxLabeledModule, TuiComboBoxModule, TuiDataListWrapperModule, TuiInputModule, TuiInputNumberModule, TuiSelectModule, TuiTagModule } from '@taiga-ui/kit';
import { BuyComponent } from './components/buy/buy.component';
import { SellComponent } from './components/sell/sell.component';
import { ExchangeComponent } from './components/exchange/exchange.component';

const TAIGA_IMPORTS = [
    TuiButtonModule,
    TuiInputCardModule,
    TuiInputNumberModule,
    TuiInputModule,
    TuiCheckboxLabeledModule,
    TuiTextfieldControllerModule,
    TuiSelectModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    TuiTagModule
];

@NgModule({
    declarations: [BuyComponent, SellComponent, ExchangeComponent],
    imports: [ 
        CommonModule, 
        FormsModule, 
        ReactiveFormsModule, 
        ExchangeRoutingModule,
        ...TAIGA_IMPORTS
    ],
    exports: [],
    providers: [ExchangeService],
})
export class ExchangeModule {}