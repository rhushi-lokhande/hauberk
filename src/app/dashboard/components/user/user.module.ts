import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

//module
import { MatModule } from '../../mat.module';

// component
import { AdduserComponent } from './adduser/adduser.component';
import { UserlistComponent } from './userlist/userlist.component';


// service
import { UserService } from './user.service';
import { RoleService } from '../role/role.service';

export const UserRoute: Routes = [
    { path: '', component: UserlistComponent },
    { path: 'user', component: UserlistComponent },
    { path: 'user/adduser', component: AdduserComponent }
]


@NgModule({
    imports: [CommonModule, MatModule, RouterModule, FormsModule, ReactiveFormsModule],
    declarations: [AdduserComponent, UserlistComponent],
    exports: [AdduserComponent, UserlistComponent],
    providers: [UserService,  RoleService]
})
export class UserModule { }