import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SnackBarHelper } from '../helpers/snackbar.helper';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private snackBar: SnackBarHelper) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            const error = err.error?.message || err.statusText;
            this.snackBar.openError(error, 'Close');

          
            console.error(err);
            return throwError(error);
        }))
    }
}