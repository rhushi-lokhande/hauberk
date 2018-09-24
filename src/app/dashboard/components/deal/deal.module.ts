import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


// module
import { MatModule } from '../../mat.module';

// component
import { DealComponent } from './deal/deal.component';
import { NewDealComponent } from './newdeal/newdeal.component';

// services
import { dealService } from './deal.service';

export const DealRoute: Routes = [
    { path: 'deal', component: DealComponent },
    { path: 'deal/new-deal', component: NewDealComponent },
]

@NgModule({
    imports: [CommonModule, MatModule, RouterModule, FormsModule, ReactiveFormsModule],
    declarations: [DealComponent, NewDealComponent],
    providers: [dealService]
})
export class DealModule { }