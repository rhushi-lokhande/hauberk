
import { Injectable } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { Observable, Subject, ReplaySubject } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable()
export class VerifyAuthGuard implements CanActivate {
    constructor(private router: Router, private _loginService: LoginService) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return Observable.create(observer => {
            this._loginService.isLogin()
                .subscribe((res: any) => {
                    if (res.isVerified===true) {
                    } else if (res.isVerified) {
                        this.router.navigate(['dashboard']);
                    } else if (!res.isLogin) {
                        this.redirectToLogin(state);
                        observer.next(false);
                        observer.complete();
                    }
                    observer.next(true);
                    observer.complete();
                }, (err) => {
                    this.redirectToLogin(state);
                    observer.next(false);
                    observer.complete();
                });
        });
    }

    redirectToLogin(state: RouterStateSnapshot) {
        this.router.navigate(['login'], { queryParams: { q: state.url } });
    }

    redirectToVerify(state: RouterStateSnapshot) {
        this.router.navigate(['verify'], { queryParams: { q: state.url } });
    }

}

