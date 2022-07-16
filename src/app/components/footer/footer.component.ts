import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}

@NgModule({
    declarations: [FooterComponent],
    imports: [ CommonModule, RouterModule ],
    exports: [FooterComponent],
    providers: [],
})
export class FooterModule {}