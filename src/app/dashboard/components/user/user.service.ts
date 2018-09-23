import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UserService {
    private userUrl = './api/user';

    constructor(private http: HttpClient) { }
    getUser() {
        return this.http.get(this.userUrl);
    }

    addUser(user) {
        user.addUser = true;
        user.password = window.btoa(user.password);
        return this.http.post(this.userUrl, user);
    }
}