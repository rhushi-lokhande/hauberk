import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardAuthGuard } from '../services/dashboardAuthGuard';

import { UserRoute } from './components/user/user.module';
import { RoleRoute } from './components/role/role.module';
import { DealRoute } from './components/deal/deal.module';
import { LeadRoute } from './components/lead/lead.module';
const routes: Routes = [
	{
		path: 'dashboard', component: DashboardComponent,
		canActivate: [DashboardAuthGuard],
		children: [
			...UserRoute,
			...RoleRoute,
			...DealRoute,
			...LeadRoute
		]
	},

];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(routes)
	],
	declarations: [],
	exports: [RouterModule]
})
export class DashboardRoutModule { }
