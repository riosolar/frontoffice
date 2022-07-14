import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
    selector: 'app-exchange',
    templateUrl: './exchange.component.html',
    styleUrls: ['./exchange.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExchangeComponent implements OnInit {
    public readonly sellForm = this.formBuilder.group({
        token: null,
        amount: null,
        address: null
    });

    public readonly buyForm = this.formBuilder.group({
        amount: null,
        bank: null,
        cardNumber: null
    });
    
    public readonly exchangeAgreement = new FormControl(false);

    public readonly serviceAgreement = new FormControl(false);

    constructor(private readonly formBuilder: FormBuilder) { }

    ngOnInit(): void { }
}
