import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {OverviewModule} from "./modules/overview/overview.module";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {TableService} from "./core/services/table.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverviewModule,
    NoopAnimationsModule
  ],
  providers: [TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
