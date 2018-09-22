import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardAuthGuard } from '../services/dashboardAuthGuard';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [DashboardAuthGuard], }
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
