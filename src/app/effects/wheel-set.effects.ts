import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action, Store } from '@ngrx/store';

import { WheelSetService } from '../services';
import * as WheelSetActions from '../actions';
import { WheelSet } from '../models/wheel-set.model';
import { WheelSetStoreSearchResults, WheelSetStoreSearchCriteria } from '../actions';
import * as fromRoot from '../reducers/app-reducers';

@Injectable()
export class WheelSetEffects {

    constructor(
        private actions$: Actions,
        private wheelSetService: WheelSetService,
        private store: Store<fromRoot.AppState>
    ) {}

    @Effect()
    search$: Observable<Action> = this.actions$
        .ofType(WheelSetActions.WHEEL_SET_STORE_SEARCH_CRITERIA)
        .map((action: WheelSetStoreSearchCriteria) => action.payload)
        .switchMap(searchTerms => {
            this.store.dispatch(new WheelSetActions.WheelSetStoreRetrieveFlag(true));
            let wheelSet: Observable<WheelSet[]> = this.wheelSetService.getWheelSet(searchTerms);
            this.store.dispatch(new WheelSetActions.WheelSetStoreRetrieveFlag(false))
            return wheelSet;
        })
        .map(searchResults => {
            this.store.dispatch(new WheelSetActions.WheelSetStoreResultsCount(searchResults.length));
            return new WheelSetActions.WheelSetStoreSearchResults(searchResults);
        })
}