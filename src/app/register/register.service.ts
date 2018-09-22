import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegisterService {
    private registerUrl = './auth/signup';

    constructor(private http: HttpClient) { }
    register(data) {
        data.password = window.btoa(data.password);
        return this.http.post(this.registerUrl,data);
    }
}
