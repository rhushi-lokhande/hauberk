import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {
	username: string;
	password: string
	loginError: string;
	usernameError = false;
	passwordError = false;
	constructor(private _loginService: LoginService) { }

	ngOnInit() {
	}

	login() {
		if (this.validate()) {
			this._loginService.login(this.username, this.password).subscribe((res: any) => {
				console.log('login res ', res);
				this.loginError = res.msg;
			});
		}
	}

	validate() {
		let isValid = true;
		const emailExp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
		this.usernameError = false;
		if(!this.username || !this.username.match(emailExp)){
			this.usernameError = true;
			isValid = false;
		}

		this.passwordError = false;
		if (!this.password || this.password.length <= 4) {
			this.passwordError = true;
			isValid = false;
		}
		return isValid;
	}

}
