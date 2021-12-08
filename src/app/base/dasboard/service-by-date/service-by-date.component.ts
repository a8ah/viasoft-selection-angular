import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-service-by-date',
  templateUrl: './service-by-date.component.html',
  styleUrls: ['./service-by-date.component.css']
})
export class ServiceByDateComponent implements OnInit {

  formFilterByDate: FormGroup;

  constructor(private dashboardService:DashboardService,public fb: FormBuilder) { }

  ngOnInit() {
    this.formFilterByDate = this.fb.group({
      date_begin_F: [null,[Validators.required]],
      date_end_F: [null,[Validators.required]]
  });
  }

  findByDateRange(){
    let start = this.formFilterByDate.controls.date_begin_F.value
    let end = this.formFilterByDate.controls.date_end_F.value
    console.log(start)
    console.log(end)
    
    let pipe = new DatePipe('en-US'); // Use your own locale  
    const startFormattedDate = pipe.transform(start, "yyyy-MM-dd");
    const endFormattedDate = pipe.transform(end,"yyyy-MM-dd");    
    
    this.dashboardService.getStatusByDateRange(startFormattedDate,endFormattedDate).subscribe(
          (result: any) =>{
            console.log(result);
          },error =>{
            console.log(error);
          }
        )
      }

}
