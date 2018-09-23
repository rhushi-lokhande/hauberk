import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../user.service';

@Component({
	selector: 'app-userlist',
	templateUrl: './userlist.component.html',
	styleUrls: ['./userlist.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserlistComponent implements OnInit {

	users = [];

	constructor(private userService: UserService, private _cdr: ChangeDetectorRef) { }

	ngOnInit() {
		this.userService.getUser().subscribe((res: any) => {
			this.users = res;
			this._cdr.markForCheck();
		});
	}

}
