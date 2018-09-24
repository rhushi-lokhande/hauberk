import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-ctn-sidenav',
    styleUrls: ['./sidenav.component.css'],
    templateUrl: 'sidenav.component.html'
})

export class SidenavComponent implements OnInit {

    @Input() user: Object;
    @Input() org: Object;

    constructor(private router: Router) { }
    menuList = [{
        title: 'Users',
        icon: 'user',
        path: '/user',
    },
    {
        title: 'Role',
        icon: 'gear',
        path: '/role'
    },
    {
        title: 'Deal',
        icon: 'briefcase',
        path: '/deal'
    },
    {
        title:'Lead',
        icon:'clipboard',
        path:'/lead'
    },
    {
        title: 'menu 2',
        icon: 'icon',
        path: '/order',
        subMenu: [
            {
                title: 'menu 2',
                icon: 'icon',
                path: '/order'
            },
            {
                title: 'menu 3',
                icon: 'icon',
                path: '/order'
            }
        ]
    }
    ];
    ngOnInit() { }
    opneMenu(menu) {
        // this.toggleOtherOpenMenu();
        menu.active = true;
        if (!menu.subMenu) {
            this.router.navigate(['/dashboard' + menu.path]);
        }
    }
    // toggleOtherOpenMenu(menu?){
    //      menu = menu || this.menuList;
    //      menu.map(m=>{
    //          m.active= !1;
    //          if(m.subMenu){
    //              this.toggleOtherOpenMenu(m.subMenu);
    //          }
    //      });

    // }
}
