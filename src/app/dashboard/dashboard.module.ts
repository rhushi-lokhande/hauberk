import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// modules
import { DashboardRoutModule } from './dashboard.route';
import { MatModule } from './mat.module';
import { UserModule } from './components/user/user.module';
import { RoleModule } from './components/role/role.module';
import { DealModule } from './components/deal/deal.module';
import { LeadModule } from './components/lead/lead.module';

// component
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// services
import { LoginService } from '../login/login.service';
import { DashboardAuthGuard } from '../services/dashboardAuthGuard';
import { DashboardService } from './components/dashboard/dashboard.service';

@NgModule({
	declarations: [
		DashboardComponent,
		SidenavComponent,
		NavbarComponent
	],
	imports: [
		BrowserModule,
		MatModule,
		DashboardRoutModule,
		UserModule,
		RoleModule,
		DealModule,
		LeadModule
	],
	providers: [LoginService, DashboardAuthGuard, DashboardService],
})
export class DashboardModule { }
