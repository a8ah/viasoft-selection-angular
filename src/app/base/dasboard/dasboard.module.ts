import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
// import { ComponentsModule } from 'src/app/global/components/components.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';
import {TableModule} from 'primeng/table';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { CalendarModule } from "primeng/calendar";
import {ButtonModule} from 'primeng/button';

import { ActualStatusByStateComponent } from './actual-status-by-state/actual-status-by-state.component';
import { ServiceByDateComponent } from './service-by-date/service-by-date.component';
import { StringToIconPipe } from './string-to-icon.pipe';
import { ComponentsModule } from 'src/app/global/components/components.module';

@NgModule({
  declarations: [MainDashboardComponent, ActualStatusByStateComponent, ServiceByDateComponent, StringToIconPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    ComponentsModule,
    CardModule,
    PanelModule,
    TableModule,
    AutoCompleteModule,
    CalendarModule,
    ButtonModule
  ]
})
export class DasboardModule { }
