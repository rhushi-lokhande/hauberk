import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

// modules
import { DashboardModule } from './dashboard/dashboard.module'
import { AppRoutingModule } from './app-routing.module';
import { RegisterModule } from './register/register.module'
import { LoginModule} from './login/login.module'

// components
import { AppComponent } from './app.component';


// services
import { InterceptService } from './services/interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    DashboardModule,
    RegisterModule,
    LoginModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
