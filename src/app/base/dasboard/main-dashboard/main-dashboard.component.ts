import { Component, OnInit } from '@angular/core';
import { ServiceActualStatusByStateModel } from '../../model/serviceStatusFilterByState copy';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {

  moreAffectedState: any;
  affectedTimes: any;

  serviceActualStatus:any[]=[];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.moreAffectedStateFn();
    this.getActualStatusFn();
  }

  moreAffectedStateFn(){
    this.dashboardService.moreAffectedState().subscribe(
      (result: any) =>{
        this.affectedTimes=result.body.affectedTimes;
        result.body.affectedTimes ? this.moreAffectedState=result.body.state:this.moreAffectedState=null
      },
      error => {
        console.log(error);
      }
    )
  }

  getActualStatusFn(){
    this.dashboardService.getActualStatus().subscribe(
      (result: any) =>{
      result.body.forEach(element => {
        let arreglo_stateServiceStatus:any[]=[]
        let arreglo_serviceStatus:any[]=[]
        arreglo_stateServiceStatus.push({state :element.state})
        element.serviceState.forEach(states => {
          let actualStatus: ServiceActualStatusByStateModel = states as ServiceActualStatusByStateModel;
          arreglo_serviceStatus.push(actualStatus)
        });
        arreglo_stateServiceStatus.push(arreglo_serviceStatus);
        this.serviceActualStatus.push(arreglo_stateServiceStatus); 
       });
      },
      error => {
        console.log(error);
      }
    )
  }

}
