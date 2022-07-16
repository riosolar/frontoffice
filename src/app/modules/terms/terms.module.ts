import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsComponent } from './components/terms/terms.component';
import { TermsRoutingModule } from './terms-routing.module';

@NgModule({
    declarations: [TermsComponent],
    imports: [ CommonModule, TermsRoutingModule ],
    exports: [],
    providers: [],
})
export class TermsModule {}