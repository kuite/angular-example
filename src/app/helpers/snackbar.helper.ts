import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class SnackBarHelper {

    private errorConfig: MatSnackBarConfig;

    constructor(
        private snackBar: MatSnackBar
    ) 
    {
        this.errorConfig = new MatSnackBarConfig();
        this.errorConfig.panelClass = ['red-snackbar'];
        this.errorConfig.duration = 4000; 
        this.errorConfig.verticalPosition = 'top';
    }

    openSuccess(message: string, action?: string)
    {
        this.snackBar.open(message, action);
    }

    openError(message: string, action?: string)
    {
        this.snackBar.open(message, action, this.errorConfig);
    }
}