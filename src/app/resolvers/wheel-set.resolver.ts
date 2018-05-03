import { Store } from '@ngrx/store';
import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { WheelSet } from '../models'; 
import * as WheelSetActions from '../actions/wheel-set.actions';
import * as fromRoot from '../reducers/app-reducers';


@Injectable()
export class WheelSetResolver implements Resolve<WheelSet> {

    constructor(private store: Store<fromRoot.AppState>) {}

    resolve(): Observable<WheelSet> {

        // TODO: Implement
        return null;
    }

    initializeWheelSet(): void {
        this.store.dispatch(new WheelSetActions.WheelSetStoreSearchCriteria([]));
    }
}