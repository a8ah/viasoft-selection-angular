import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/global/components/components.module';

import { LayaoutRoutingModule } from './layaout-routing.module';
import { BaseComponent } from './base/base.component';


@NgModule({
  declarations: [BaseComponent],
  imports: [
    CommonModule,
    LayaoutRoutingModule,
    ComponentsModule
  ]
})
export class LayaoutModule { }
