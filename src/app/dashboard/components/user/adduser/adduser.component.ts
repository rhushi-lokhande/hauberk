import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

import { RoleService } from '../../role/role.service';
import { UserService } from '../user.service';
import { MatSnackBar } from '@angular/material';

// expression
import {  exp } from '../../../../expression'

@Component({
	selector: 'app-adduser',
	templateUrl: './adduser.component.html',
	styleUrls: ['./adduser.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdduserComponent implements OnInit {
	roles = [
	]

	newUser = {
		firstName: '',
		lastName: '',
		phoneNo: '',
		email: '',
		password: '',
		roles: [],
	}
	newUserValidation = {
		firstName: false,
		lastName: false,
		phoneNo: false,
		email: false,
		password: false,
		roles: false,
	}
	constructor(private roleService: RoleService, private _cdr: ChangeDetectorRef,
		private userService: UserService, private router: Router,
		public snackBar: MatSnackBar) { }

	ngOnInit() {
		this.roleService.getRole().subscribe((res: any) => {
			this.roles = res;
			this._cdr.markForCheck();
		})
	}
	generatePassword() {
		this.newUser.password = Math.random().toString(36).slice(-8).toString();
	}

	addNewUser() {
		if (this.validateNewUser()) {
			this.userService.addUser(this.newUser).subscribe(res => {
				this.router.navigate(['/dashboard/user']);
				this.snackBar.open('User added successfully', '', {
					duration: 1500,
				});
			});
		}
	}

	validateNewUser() {
		let isValid = true;

		this.newUserValidation.firstName = false;
		if(!this.newUser.firstName || !this.newUser.firstName.match(exp.alphaExp)){
			isValid = false;
			this.newUserValidation.firstName = true;
		}

		this.newUserValidation.lastName = false;
		if(!this.newUser.lastName || !this.newUser.lastName.match(exp.alphaExp)){
			isValid = false;
			this.newUserValidation.lastName = true;
		}


		this.newUserValidation.phoneNo = false;
		if(!this.newUser.phoneNo || !this.newUser.phoneNo.match(exp.noExp)){
			isValid = false;
			this.newUserValidation.phoneNo = true;
		}

		this.newUserValidation.email = false;
		if(!this.newUser.email || !this.newUser.email.match(exp.emailExp)){
			isValid = false;
			this.newUserValidation.email = true;
		}

		this.newUserValidation.password = false;
		if(!this.newUser.password || this.newUser.password.length <= 4){
			isValid = false;
			this.newUserValidation.password = true;
		}

		this.newUserValidation.roles = false;
		if(!this.newUser.roles || !this.newUser.roles.length){
			isValid = false;
			this.newUserValidation.roles = true;
		}

		return isValid;

	}
}
