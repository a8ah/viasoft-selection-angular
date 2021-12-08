import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceStatusByStateModel } from '../../model/serviceStatusFilterByState';
import { State } from '../../model/state';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-actual-status-by-state',
  templateUrl: './actual-status-by-state.component.html',
  styleUrls: ['./actual-status-by-state.component.css']
})
export class ActualStatusByStateComponent implements OnInit {

  form: FormGroup;
  
  states: State[]= [];
  searchStates: State[]= [];
  serviceStatusFilterByState: ServiceStatusByStateModel []= [];
  filteredState: string;
  estado:any;
  
  constructor(private dashboardService: DashboardService,public fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      estado: [null]
  });
    this.getAllStateFn();
  }

  getAllStateFn(){
    this.dashboardService.getAllState().subscribe(
      (result: any) =>{
        for (let index = 0; index < result.body.length; index++) {
          this.states.push(result.body[index]);
        }
      },
      error => {
        console.log(error);
      }
    )
  }

  search(event) {
    this.searchStates= [];
    for (let i = 0; i < this.states.length; i++) {
      if(!this.states[i].name.toUpperCase().indexOf(event.query.toUpperCase())){
        this.searchStates.push(this.states[i])
      }
    }
  }  

onSelect(event){
  this.serviceStatusFilterByState=[];
  this.filteredState = "Estado actual de los servicios en "+event.name;
  this.getActualStatusByFilterStateFn(event.id);
}

getActualStatusByFilterStateFn(id:any){
  this.dashboardService.getActualStatusByFilterState(id).subscribe(
    (result: any) =>{
      for (let index = 0; index < result.body.serviceState.length; index++) {
        const element = result.body.serviceState[index] as ServiceStatusByStateModel;  
        this.serviceStatusFilterByState.push(element);
      }    
    },
    error => {
      console.log(error);
    }
  )
}


}
