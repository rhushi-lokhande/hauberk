import { NgModule } from '@angular/core';

import {
    MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule, MatToolbarModule,
    MatButtonModule, MatIconModule, MatMenuModule, MatSidenavModule, MatCardModule, MatSelectModule,
    MatPaginatorModule, MatTabsModule, MatTooltipModule, MatTableModule, MatGridListModule, MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS,
    MatChipsModule
} from '@angular/material';


@NgModule({
    imports:  [ MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule, MatToolbarModule,
    MatButtonModule, MatIconModule, MatMenuModule, MatSidenavModule, MatCardModule, MatSelectModule,
    MatPaginatorModule, MatTabsModule, MatTooltipModule, MatTableModule, MatGridListModule, MatSnackBarModule,
    MatChipsModule ],
    
    exports: [ MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule, MatToolbarModule,
    MatButtonModule, MatIconModule, MatMenuModule, MatSidenavModule, MatCardModule, MatSelectModule,
    MatPaginatorModule, MatTabsModule, MatTooltipModule, MatTableModule, MatGridListModule, MatSnackBarModule,
    MatChipsModule ],
    providers: [{provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}],
})
export class MatModule { }
