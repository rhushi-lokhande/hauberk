import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

// services
import { DashboardService } from './dashboard.service';
@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

	dashboard;

	constructor(private dashboardService: DashboardService, private  _cdr:ChangeDetectorRef) { }

	ngOnInit() {
		this.dashboardService.getDashboardDetails().subscribe(res=>{
			this.dashboard = res;
			this._cdr.markForCheck();
			console.log(this.dashboard)
		})
	}

}
