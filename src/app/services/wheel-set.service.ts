import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';

import { WheelSet } from '../models/wheel-set.model';

@Injectable()
export class WheelSetService {

    private wheelSetUrl = 'http://localhost:3000/wheel-set'

    constructor(private http: HttpClient) { 

    }

    getWheelSet(searchTermsFromChildForm: string[]): Observable<WheelSet[]> {
        return this.http.get<WheelSet[]>(this.wheelSetUrl);
    }
}