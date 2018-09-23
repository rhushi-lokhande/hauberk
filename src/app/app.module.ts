import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

// modules
import { MatModule } from './dashboard/mat.module'
import { DashboardModule } from './dashboard/dashboard.module'
import { AppRoutingModule } from './app-routing.module';
import { RegisterModule } from './register/register.module'
import { LoginModule } from './login/login.module'

// components
import { AppComponent } from './app.component';
import { VerifyComponent } from './verify/verify.component'
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

// services
import { InterceptService } from './services/interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// auth guard
import { VerifyAuthGuard } from './services/VerifyAuthGuard';

@NgModule({
	declarations: [
		AppComponent,
		VerifyComponent,
		HomeComponent,
		NavComponent
	],
	imports: [
		BrowserAnimationsModule,
		BrowserModule, HttpClientModule,
		AppRoutingModule,
		MatModule,
		DashboardModule,
		RegisterModule,
		LoginModule,
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: InterceptService,
			multi: true
		},
		VerifyAuthGuard
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
