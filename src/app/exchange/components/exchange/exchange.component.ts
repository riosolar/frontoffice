import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-exchange',
    templateUrl: './exchange.component.html',
    styleUrls: ['./exchange.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExchangeComponent implements OnInit {
    public readonly sellForm = this.formBuilder.group({
        token: [null, Validators.required],
        amount: [null, Validators.required],
        address: [null, Validators.required]
    });

    public readonly buyForm = this.formBuilder.group({
        amount: [null, Validators.required],
        bank: [null, Validators.required],
        cardNumber: [null, Validators.required]
    });
    
    public readonly exchangeAgreement = new FormControl(false);

    public readonly serviceAgreement = new FormControl(false);

    get isValid(): boolean {
        return Boolean(this.exchangeAgreement.value) && Boolean(this.serviceAgreement.value) && this.sellForm.valid && this.buyForm.valid;
    }

    constructor(private readonly formBuilder: FormBuilder) { }

    ngOnInit(): void { }
}
