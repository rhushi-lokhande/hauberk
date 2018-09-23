import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

//module
import { MatModule } from '../../mat.module';

// component 
import {RoleComponent} from './role.component'

// services
import {RoleService} from './role.service'

export const RoleRoute: Routes = [
    { path: 'role', component: RoleComponent },
]

@NgModule({
    imports: [CommonModule, MatModule, RouterModule, FormsModule, ReactiveFormsModule],
    declarations:[RoleComponent],
    providers:[RoleService],
})
export class RoleModule{}