import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

//new components
import { HeaderComponent } from '../components/header/header.component';
import { MenuComponent } from '../components/menu/menu.component';


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
