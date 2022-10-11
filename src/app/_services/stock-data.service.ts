import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StockDataService {

    constructor(
        private http: HttpClient
    ) 
    {
        
    }

    getPopulation(): Observable<string> 
    {
        let filterParameter = "";

        var result = 
            this.http.get<string>(`https://datausa.io/api/data?drilldowns=Nation&measures=Population`);
        return result;
    }
}