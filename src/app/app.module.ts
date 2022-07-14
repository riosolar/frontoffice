import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TuiThemeNightModule, TuiModeModule } from "@taiga-ui/core";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from "./footer/footer.component";
import { HeaderModule } from "./header/header.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TuiRootModule,
    BrowserAnimationsModule,
    TuiDialogModule,
    TuiAlertModule,
    FooterModule,
    HeaderModule,
    TuiThemeNightModule,
    TuiModeModule,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
