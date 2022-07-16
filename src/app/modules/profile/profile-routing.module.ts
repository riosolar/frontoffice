import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProfileContainerComponent } from './components/profile-container/profile-container.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HistoryComponent } from './components/history/history.component';

const routes: Routes = [
    { 
        path: '', 
        component: ProfileContainerComponent, 
        children: [
            {
                path: 'settings',
                component: SettingsComponent
            },
            {
                path: 'history',
                component: HistoryComponent
            }
        ]
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule {}
