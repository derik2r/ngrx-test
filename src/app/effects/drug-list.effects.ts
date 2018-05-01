import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action, Store } from '@ngrx/store';

import { DrugListService } from '../services';
import * as DrugListActions from '../actions';
import { DrugList } from '../models/drug-list.model';
import { DrugListStoreSearchResults, DrugListStoreSearchCriteria } from '../actions';
import * as fromRoot from '../reducers/app-reducers';

@Injectable()
export class DrugListEffects {

    constructor(
        private actions$: Actions,
        private drugListService: DrugListService,
        private store: Store<fromRoot.AppState>
    ) {}

    @Effect()
    search$: Observable<Action> = this.actions$
        .ofType(DrugListActions.DRUG_LIST_STORE_SEARCH_CRITERIA)
        .map((action: DrugListStoreSearchCriteria) => action.payload)
        .switchMap(searchTerms => {
            this.store.dispatch(new DrugListActions.DrugListStoreRetrieveFlag(true));
            let drugList: Observable<DrugList[]> = this.drugListService.getDrugList(searchTerms);
            this.store.dispatch(new DrugListActions.DrugListStoreRetrieveFlag(false))
            return drugList;
        })
        .map(searchResults => {
            this.store.dispatch(new DrugListActions.DrugListStoreResultsCount(searchResults.length));
            return new DrugListActions.DrugListStoreSearchResults(searchResults);
        })
}