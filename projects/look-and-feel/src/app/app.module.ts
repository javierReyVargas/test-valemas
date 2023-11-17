import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LookAndFeelModule } from './modules/look-and-feel/look-and-feel.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LookAndFeelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
