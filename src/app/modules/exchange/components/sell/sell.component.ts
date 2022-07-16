import { ChangeDetectionStrategy, Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TOKENS } from 'src/app/core/constants/tokens';

@Component({
    selector: 'app-sell',
    templateUrl: './sell.component.html',
    styleUrls: ['./sell.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SellComponent implements OnInit {
    @Input() form: FormGroup;

    @Output() sellData: any;

    public readonly tokens = TOKENS;

    constructor() { }

    ngOnInit(): void {
        this.form.valueChanges.subscribe(console.log);
    }
}
