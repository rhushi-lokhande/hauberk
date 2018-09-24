import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class dealService {
    private dealTypeUrl = '/api/deal-type';
    constructor(private http: HttpClient) { }
    getDealType(){
        return this.http.get(this.dealTypeUrl);
    }
}