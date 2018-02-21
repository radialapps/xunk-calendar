import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { XunkCalendarModule } from '../xunk-calendar/xunk-calendar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    XunkCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
