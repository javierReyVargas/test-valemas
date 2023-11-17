import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const childRoutes: Routes = [
  {
    path: 'look-and-feel',
    loadChildren: () => import('LookAndFeel/LookAndFeelModule').then((m) => m.LookAndFeelModule)
  },
  { path: '**', redirectTo: '/main', pathMatch: 'full' }
]



@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class ChildRoutesModule { }
