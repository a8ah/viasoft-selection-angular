import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VerticalComponent } from './nav-var/vertical/vertical.component';
import { TabMenuModule,} from 'primeng/tabmenu';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    TabMenuModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class ComponentsModule { }
