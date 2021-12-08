import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualStatusByStateComponent } from './actual-status-by-state/actual-status-by-state.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { ServiceByDateComponent } from './service-by-date/service-by-date.component';

const routes: Routes = [
  { path: '', component: MainDashboardComponent },
  { path: 'actual-by-state', component: ActualStatusByStateComponent },
  { path: 'by-date', component: ServiceByDateComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
