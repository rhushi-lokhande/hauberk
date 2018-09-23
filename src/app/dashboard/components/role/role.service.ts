import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class RoleService{
    private roleUrl='./api/role';
    private permissionUrl='./api/permission';

    constructor(private http:HttpClient){}

    getRole(){
        return this.http.get(this.roleUrl);
    }

    addRole(newRole){
        return this.http.post(this.roleUrl,newRole);
    }

    getPermission(){
        return this.http.get(this.permissionUrl);
    }
}