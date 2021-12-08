import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[];
  activeItem: MenuItem;
  
  constructor() { }

  ngOnInit(){

    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['']},
      {label: 'Estado', icon: 'pi pi-fw pi-map', routerLink: ['/actual-by-state']},
      {label: 'Calendar', icon: 'pi pi-fw pi-calendar', routerLink: ['/by-date']},
    ];
  
    this.activeItem = this.items[0];
    
  }

}
