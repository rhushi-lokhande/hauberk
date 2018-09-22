import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// modules
import { DashboardRoutModule } from './dashboard.route';
import { MatModule } from './mat.module'


// component
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// services
import { LoginService } from '../login/login.service';
import { DashboardAuthGuard } from '../services/dashboardAuthGuard';


@NgModule({
  declarations: [
    DashboardComponent,
    SidenavComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    MatModule,
    DashboardRoutModule
  ],
  providers: [LoginService, DashboardAuthGuard],
})
export class DashboardModule { }
