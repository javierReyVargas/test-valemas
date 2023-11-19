import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LookAndFeelRoutingModule } from './look-and-feel-routing.module';
import { SystemDesignComponent } from '../../modules/look-and-feel/system-design/system-design.component';
import { ChangeColorComponent } from './components/change-color/change-color.component';


@NgModule({
  declarations: [SystemDesignComponent, ChangeColorComponent],
  imports: [
    CommonModule,
    LookAndFeelRoutingModule,

  ]
})
export class LookAndFeelModule { }
