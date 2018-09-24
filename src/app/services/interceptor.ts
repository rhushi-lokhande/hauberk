import { Injectable } from '@angular/core';
import {
	HttpEvent,
	HttpInterceptor,
	HttpHandler,
	HttpRequest,
	HttpResponse,
	HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import {MatSnackBar} from '@angular/material';


@Injectable()
export class InterceptService implements HttpInterceptor {

	constructor(private router: Router,public snackBar: MatSnackBar) { }

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		request = request.clone({
			setHeaders: {
				Authorization: `Bearer ${localStorage.getItem('MY_TOKEN')}`
			}
		});

		// console.log('----request----');

		// console.log(request);

		// console.log('--- end of request---');


		return next.handle(request)
			.pipe(
			tap(event => {
				if (event instanceof HttpResponse) {

					// console.log(' all looks good');
					// http response status code
					// console.log(event.status);
				}
			}, error => {

				if (error instanceof HttpErrorResponse) {
					if (error.status === 302) {
						this.router.navigate([error.error.url]);
					} else if (error.status === 409){
						this.snackBar.open(error.error,'',{
							duration: 1500,
						  });
					}
				}
				// http response status code


			}));

	}

}
