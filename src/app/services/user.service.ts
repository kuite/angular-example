import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model/user.model';

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

    getUser(id: number): Observable<User>
    {
        return null;
    }
}