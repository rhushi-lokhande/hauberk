import { NgModule } from '@angular/core';

import {
    MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule, MatToolbarModule,
    MatButtonModule, MatIconModule, MatMenuModule, MatSidenavModule, MatCardModule, MatSelectModule,
    MatPaginatorModule, MatTabsModule, MatTooltipModule
} from '@angular/material';


@NgModule({
    imports:  [ MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule, MatToolbarModule,
    MatButtonModule, MatIconModule, MatMenuModule, MatSidenavModule, MatCardModule, MatSelectModule,
    MatPaginatorModule, MatTabsModule, MatTooltipModule ],
    
    exports: [ MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule, MatToolbarModule,
    MatButtonModule, MatIconModule, MatMenuModule, MatSidenavModule, MatCardModule, MatSelectModule,
    MatPaginatorModule, MatTabsModule, MatTooltipModule ],
    providers: [],
})
export class MatModule { }
