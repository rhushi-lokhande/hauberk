import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// component 
import { VerifyComponent } from './verify/verify.component';
import { HomeComponent } from './home/home.component';

// auth guard
import { VerifyAuthGuard } from './services/VerifyAuthGuard';


const routes: Routes = [
  { path: 'verify', component: VerifyComponent, canActivate: [VerifyAuthGuard] },
  { path: '', component:HomeComponent},
  { path: 'home', component:HomeComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
