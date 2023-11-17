import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemDesignComponent } from '../../modules/look-and-feel/system-design/system-design.component';

const routes: Routes = [
  {
    path: 'system-design',
    component: SystemDesignComponent,
  },
  { path:'', redirectTo: '/main/look-and-feel/system-design', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LookAndFeelRoutingModule { }
