import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from "@angular/material/sort";
import { DropdownModule } from 'primeng/dropdown';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ErrorInterceptor } from "../interceptors/error.interceptor";

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        MatSnackBarModule,
        MatTableModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatTabsModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatSortModule,
        DropdownModule,
        MatCheckboxModule
    ],
    declarations: [
        //tutaj deklarujemy wspoldzielone komponenty
    ],
    exports: [
        MatSnackBarModule,
        MatTableModule,
        MatNativeDateModule,
    ],
    providers: [
        { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 4000, verticalPosition: 'top', panelClass: 'green-snackbar'} },
        PercentPipe,
        CurrencyPipe,
        DecimalPipe,
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
    ],
  })
  
  export class SharedModule {}