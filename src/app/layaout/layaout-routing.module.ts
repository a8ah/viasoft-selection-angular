import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './base/base.component';

const routes: Routes = [
  { path: '', component: BaseComponent },
  {
    path: 'dashboard',
    loadChildren: () => import('../base/dasboard/dasboard.module').then(m => m.DasboardModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayaoutRoutingModule { }
