import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { RoleService } from './role.service';

@Component({
    selector: 'app-role',
    templateUrl: './role.component.html',
    styleUrls: ['./role.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoleComponent implements OnInit {

    roles = [];
    permissions = [];
    newRole = {
        title: '',
        permission: []
    }
    valid = {
        title: false,
        permission: false
    }
    constructor(private roleService: RoleService, private _cdr: ChangeDetectorRef) { }

    ngOnInit() {
        this.roleService.getRole().subscribe((res: any) => {
            this.roles = res;
            this._cdr.markForCheck();
        });

        this.roleService.getPermission().subscribe((res: any) => {
            this.permissions = res;
            this._cdr.markForCheck();
        })
    }

    addNewRole() {
        if (this.validateRole()) {
            this.roleService.addRole(this.newRole).subscribe(res => {
                this.roleService.getRole().subscribe((res: any) => {
                    this.roles = res;
                    this._cdr.markForCheck();
                })
            });
        }
    }

    validateRole() {
        let isValid = true;

        this.valid.title = false;
        if (!this.newRole.title) {
            this.valid.title = true;
            isValid = false;
        }

        this.valid.permission = false;
        if (!this.newRole.permission.length) {
            this.valid.permission = true;
            isValid = false;
        }
        return isValid;
    }

}
