import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


// module
import { MatModule } from '../../mat.module';

// component
import { LeadComponent } from './lead/lead.component';
import { NewLeadComponent } from './new-lead/new-lead.component';

export const LeadRoute: Routes = [
    { path: 'lead', component: LeadComponent },
    { path: 'new-lead', component: NewLeadComponent },
]

@NgModule({
    imports: [CommonModule, MatModule, RouterModule, FormsModule, ReactiveFormsModule],
	declarations: [LeadComponent, NewLeadComponent],
	providers: []
})
export class LeadModule { }