import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class UserService {
    private userUrl = './api/user';
    private currentUserUrl = './api/current-user';
    private cachedData;

    constructor(private http: HttpClient) { }
    getUsers() {
        return this.http.get(this.userUrl);
    }

    addUser(user) {
        user.addUser = true;
        user.password = window.btoa(user.password);
        return this.http.post(this.userUrl, user);
    }

    getCurrentUser(): Observable<any> {
        return Observable.create(observer => {
            if (this.cachedData) {
                observer.next(this.cachedData);
                observer.complete();
            } else {
                this.http.get(this.currentUserUrl).subscribe(res => {
                    this.cachedData = res;
                    observer.next(this.cachedData);
                    observer.complete();
                });
            }
            
        });
    }
}