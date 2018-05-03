import { Component, OnInit } from '@angular/core';

import { WheelSet } from '../../models/wheel-set.model';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as WheelSetActions from '../../actions/wheel-set.actions';
import * as fromRoot from '../../reducers/app-reducers';


@Component({
  selector: 'app-wheel-set',
  templateUrl: './wheel-set.component.html',
  styleUrls: ['./wheel-set.component.scss'],
  providers: [ ]
})
export class WheelSetComponent implements OnInit {

  private searchTerms: Observable<string[]>;
  private wheelSetCollection: Observable<WheelSet[]>;
  private resultsCount: Observable<number>;
  private retrieveFlag: Observable<boolean>;

  constructor(private store: Store<fromRoot.AppState>) { 
      this.searchTerms = store.select(fromRoot.selectWheelSetSearchTerms);
      this.wheelSetCollection = store.select(fromRoot.selectWheelSetResults);
      this.resultsCount = store.select(fromRoot.selectWheelSetResultsCount);
      this.retrieveFlag = store.select(fromRoot.selectWheelSetRetrieveFlag);
    }

  ngOnInit() {
  }

  performSearch(searchTermsFromChildForm: string[]): void {
    this.store.dispatch(new WheelSetActions.WheelSetStoreSearchCriteria(searchTermsFromChildForm));
  }
}
