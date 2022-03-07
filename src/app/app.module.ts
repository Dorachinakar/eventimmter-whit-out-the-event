import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterrComponent } from './counterr/counterr.component';
import { FatherComponent } from './father/father.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterrComponent,
    FatherComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
