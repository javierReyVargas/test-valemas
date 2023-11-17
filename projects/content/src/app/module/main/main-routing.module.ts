import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [  {
  path: '',
  component: MainComponent,
  loadChildren: () => import('./child-routes.module').then( m => m.ChildRoutesModule )
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
