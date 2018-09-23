import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DashboardService {
    private dashboardUrl = './api/dashboard';
    private dashboardStore;
    constructor(private http: HttpClient) { }
    getDashboardDetails(){
        if(!this.dashboardStore){
           return this.http.get(this.dashboardUrl);
        }
        return  Observable.create(observer=>{
            observer.next( this.dashboardStore);
            observer.complete();
        })
    }
}
