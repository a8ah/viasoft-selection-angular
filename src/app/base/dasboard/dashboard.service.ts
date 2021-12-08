import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http:HttpClient) { }

  baseUrl="http://localhost:9898/api/base/";

  moreAffectedState(){
    return this.http.get(this.baseUrl+"history/more-affected-state",{observe: 'response', responseType: 'json'})
  }

  getAllState(){
    return this.http.get(this.baseUrl+"state",{observe: 'response', responseType: 'json'})
  }

  getAllService(){
    return this.http.get(this.baseUrl+"servicio",{observe: 'response', responseType: 'json'})
  }

  getActualStatusByFilterState(id:any){
    return this.http.get(this.baseUrl+"history/actual-status/"+id,{observe: 'response', responseType: 'json'})
  }

  getStatusByDateRange(start:any,end:any){
    return this.http.get(this.baseUrl+"history/status-by-time-range",
                        {observe: 'response', responseType: 'json',
                        params: {startDate: start, endDate: end}})
  }

  getActualStatus(){
    return this.http.get(this.baseUrl+"history/actual-status-by-state",{observe: 'response', responseType: 'json'})
  }

  
}