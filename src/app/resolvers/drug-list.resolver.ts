import { Store } from '@ngrx/store';
import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { DrugList } from '../models'; 
import * as DrugListActions from '../actions/drug-list.actions';
import * as fromRoot from '../reducers/app-reducers';


@Injectable()
export class DrugListResolver implements Resolve<DrugList> {

    constructor(private store: Store<fromRoot.AppState>) {}

    resolve(): Observable<DrugList> {

        // TODO: Implement
        return null;
    }

    initializeDrugList(): void {
        this.store.dispatch(new DrugListActions.DrugListStoreSearchCriteria([]));
    }
}