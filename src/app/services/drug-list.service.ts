import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';

import { DrugList } from '../models/drug-list.model';

@Injectable()
export class DrugListService {

    private drugListUrl = 'http://localhost:3000/drug-list'

    constructor(private http: HttpClient) { 

    }

    getDrugList(searchTermsFromChildForm: string[]): Observable<DrugList[]> {
        return this.http.get<DrugList[]>(this.drugListUrl);
    }
}