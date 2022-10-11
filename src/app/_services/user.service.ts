import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(
        private http: HttpClient
    ) 
    {
        
    }

    createUser(name: string, job: string): Observable<string> 
    {
        var body = {
            name: name,
            job: job
        };
        var result = this.http.post<string>(`https://reqres.in/api/users`, body);
        return result;
    }
}