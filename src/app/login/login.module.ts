import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// component 
import { LoginComponent } from './login.component';


// services
import { LoginService } from './login.service'




const routes: Routes = [
    { path: 'login', component: LoginComponent }
];

@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        BrowserModule, CommonModule, FormsModule,
        RouterModule.forRoot(routes)
    ],
    providers: [LoginService],
})
export class LoginModule { }
