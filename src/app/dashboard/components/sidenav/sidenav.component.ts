import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-ctn-sidenav',
    styleUrls: ['./sidenav.component.css'],
    templateUrl: 'sidenav.component.html'
})

export class SidenavComponent implements OnInit {
    constructor(private router: Router) { }
    menuList = [{
        title: 'Service',
        icon: 'icon',
        path: '/service',
    },
    {
        title: 'Order',
        icon: 'icon',
        path: '/order'
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
        menu.active = !menu.active;
        if (!menu.subMenu) {
            this.router.navigate(['/dashboard' + menu.path]);
        }
    }
}
