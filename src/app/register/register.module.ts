import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// component 
import { RegisterComponent } from './register.component';


// services
import { RegisterService } from './register.service'




const routes: Routes = [
    { path: 'register', component: RegisterComponent }
];

@NgModule({
    declarations: [
        RegisterComponent,
    ],
    imports: [
        BrowserModule, CommonModule, FormsModule,
        RouterModule.forRoot(routes)
    ],
    providers: [RegisterService],
})
export class RegisterModule { }
