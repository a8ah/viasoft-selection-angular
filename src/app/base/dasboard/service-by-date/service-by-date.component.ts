import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceActualStatusByStateModel } from '../../model/serviceStatusFilterByState copy';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-service-by-date',
  templateUrl: './service-by-date.component.html',
  styleUrls: ['./service-by-date.component.scss']
})
export class ServiceByDateComponent implements OnInit {

  formFilterByDate: FormGroup;
  serviceActualStatus:any[]=null;
  searchstatus:boolean=false;
  pageNumber=1
  pageSize=8

  // Begining & end Date range filter
  start:any;
  end:any;

  firstElement=1;

  constructor(private dashboardService:DashboardService,public fb: FormBuilder) { }

  ngOnInit() {
    this.formFilterByDate = this.fb.group({
      date_begin_F: [null,[Validators.required]],
      date_end_F: [null,[Validators.required]]
  });
  }

  findByDateRange(){    
    this.start = this.formFilterByDate.controls.date_begin_F.value
    this.end = this.formFilterByDate.controls.date_end_F.value 
    this.pageNumber=1;       
    this.filtering();
  }

  private filtering() {
    this.serviceActualStatus = [];
    let pipe = new DatePipe('en-US');
    const startFormattedDate = pipe.transform(this.start, "yyyy-MM-dd");
    const endFormattedDate = pipe.transform(this.end, "yyyy-MM-dd");

    this.dashboardService.getStatusByDateRange(startFormattedDate, endFormattedDate, this.pageNumber, this.pageSize).subscribe(
      (result: any) => {
        result.body.forEach(element => {
          let arreglo_stateServiceStatus: any[] = [];
          let arreglo_serviceStatus: any[] = [];
          arreglo_stateServiceStatus.push({ state: element.state });
          element.serviceState.forEach(states => {
            let actualStatus: ServiceActualStatusByStateModel = states as ServiceActualStatusByStateModel;
            arreglo_serviceStatus.push(actualStatus);
          });
          arreglo_stateServiceStatus.push(arreglo_serviceStatus);
          this.serviceActualStatus.push(arreglo_stateServiceStatus);
        });
        console.log(this.serviceActualStatus);
      }, error => {
        console.log(error);
      }
    );
  }

    next() {
        this.pageNumber ++;
        this.filtering();
    }

    prev() {
      if (this.pageNumber>1){
        this.pageNumber--;
        this.filtering();
      }
        
    }

    reset() {
        this.pageNumber = 1;
    }

    isLastPage(): boolean {
      return false; 
      // return this.serviceActualStatus ? this.first === (this.customers.length - this.rows): true;
    }

    isFirstPage(): boolean {
        return this.serviceActualStatus ? this.pageNumber === 1 : true;
    }
}
