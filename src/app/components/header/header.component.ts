import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiButtonModule } from '@taiga-ui/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
    constructor(private readonly router: Router) { }

    ngOnInit(): void { }

    public navigateToExchange(): void {
        this.router.navigate(['exchange']);
    }

    public navigateToLogin(): void {
        this.router.navigate(['auth', 'login']);
    }

    public navigateToRegister(): void {
        this.router.navigate(['auth', 'register']);
    }
}

@NgModule({
    declarations: [HeaderComponent],
    imports: [ CommonModule, TuiButtonModule ],
    exports: [HeaderComponent],
    providers: [],
})
export class HeaderModule {}