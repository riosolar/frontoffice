import { ChangeDetectionStrategy, Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BANKS } from 'src/app/core/constants/banks';

@Component({
    selector: 'app-buy',
    templateUrl: './buy.component.html',
    styleUrls: ['./buy.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuyComponent implements OnInit {
    @Input() form: FormGroup;

    @Output() buyData: any;

    public readonly banks = BANKS;

    constructor() { }

    ngOnInit(): void { }
}
