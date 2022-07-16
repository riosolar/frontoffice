import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './components/settings/settings.component';
import { HistoryComponent } from './components/history/history.component';
import { ProfileContainerComponent } from './components/profile-container/profile-container.component';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiInputModule } from '@taiga-ui/kit';
import { ProfileRoutingModule } from './profile-routing.module';

const TAIGA_IMPORTS = [
    TuiButtonModule,
    TuiInputModule
];

@NgModule({
    declarations: [SettingsComponent, HistoryComponent, ProfileContainerComponent],
    imports: [ CommonModule, ...TAIGA_IMPORTS, ProfileRoutingModule ],
    exports: [],
    providers: [],
})
export class ProfileModule {}