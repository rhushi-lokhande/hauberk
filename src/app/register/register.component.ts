import { Component } from '@angular/core';
import { RegisterService } from './register.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent {

	register = {
		org_name: '',
		orgEmail: '',
		firstName: '',
		lastName: '',
		phoneNo: '',
		email: '',
		password: '',
		cPassword: ''
	}

	registrationValidation = {
		org_name: false,
		orgEmail: false,
		firstName: false,
		lastName: false,
		phoneNo: false,
		email: false,
		password: false,
		cPassword: false
	}

	allowValidate = false;

	constructor(private _register: RegisterService) {

	}
	registerOrganization() {
		this.allowValidate = true;
		if (this.validate()) {
			this._register.register(this.register).subscribe(res=>{
				console.log(res);
			});
		}
	}

	validate() {
		if(!this.allowValidate){
			return false;
		}
			
		let isValid = true;
		const alphaExp = /^[a-zA-Z]+$/;
		const emailExp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
		const noExp = /^[6789]\d{9}$/;

		this.registrationValidation.org_name = false;
		if(!this.register.org_name){
			this.registrationValidation.org_name = true;
			isValid = false;

		}

		this.registrationValidation.orgEmail = false;
		if(!this.register.orgEmail || !this.register.orgEmail.match(emailExp)){
			this.registrationValidation.orgEmail = true;
			isValid = false;
		}

		this.registrationValidation.firstName = false;
		if(!this.register.firstName || !this.register.firstName.match(alphaExp)){
			this.registrationValidation.firstName = true;
			isValid = false
		}

		this.registrationValidation.lastName = false;
		if(!this.register.lastName || !this.register.lastName.match(alphaExp)){
			this.registrationValidation.lastName = true;
			isValid = false;
		}

		this.registrationValidation.phoneNo = false;
		if(!this.register.phoneNo || !this.register.phoneNo.match(noExp)){
			this.registrationValidation.phoneNo = true;
			isValid = false;
		}

		this.registrationValidation.email = false;
		if(!this.register.email || !this.register.email.match(emailExp)){
			this.registrationValidation.email = true;
			isValid = false;
		}

		this.registrationValidation.password = false;
		if (!this.register.password || this.register.password.length <= 4) {
			this.registrationValidation.password = true;
			isValid = false;
		}

		this.registrationValidation.cPassword = false;
		if (!this.register.cPassword || !(this.register.cPassword === this.register.password)) {
			this.registrationValidation.cPassword = true;
			isValid = false;
		}

		return isValid;
	}

}
