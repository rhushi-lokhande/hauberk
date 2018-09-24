import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

// service
import { dealService } from '../deal.service';
import { UserService } from '../../user/user.service';

@Component({
	selector: 'app-newdeal',
	templateUrl: './newdeal.component.html',
	styleUrls: ['./newdeal.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewDealComponent implements OnInit {

	newDeal = {}
	dealTypes = [];
	currentUser;
	userList = [];
	constructor(private dealService: dealService, private _cdr: ChangeDetectorRef,
		private userService: UserService) {
		this.userService.getCurrentUser().subscribe((res) => {
			this.currentUser = res;
			if (this.currentUser.is_owner) {
				this.userService.getUsers().subscribe((res: any) => {
					this.userList = res;
					this._cdr.markForCheck();
				})
			}
		});
		this.dealService.getDealType().subscribe((res: any) => {
			this.dealTypes = res;
		});
	}

	ngOnInit() {


	}

}
