import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class dealService{
    constructor( private http:HttpClient){}
}