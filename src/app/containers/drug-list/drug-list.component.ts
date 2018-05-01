import { Component, OnInit } from '@angular/core';

import { DrugList } from '../../models/drug-list.model';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as DrugListActions from '../../actions/drug-list.actions';
import * as fromRoot from '../../reducers/app-reducers';


@Component({
  selector: 'app-drug-list',
  templateUrl: './drug-list.component.html',
  styleUrls: ['./drug-list.component.scss'],
  providers: [ ]
})
export class DrugListComponent implements OnInit {

  private searchTerms: Observable<string[]>;
  private drugListCollection: Observable<DrugList[]>;
  private resultsCount: Observable<number>;
  private retrieveFlag: Observable<boolean>;

  constructor(private store: Store<fromRoot.AppState>) { 
      this.searchTerms = store.select(fromRoot.selectDrugListSearchTerms);
      this.drugListCollection = store.select(fromRoot.selectDrugListResults);
      this.resultsCount = store.select(fromRoot.selectDrugListResultsCount);
      this.retrieveFlag = store.select(fromRoot.selectDrugListRetrieveFlag);
    }

  ngOnInit() {
  }

  performSearch(searchTermsFromChildForm: string[]): void {
    this.store.dispatch(new DrugListActions.DrugListStoreSearchCriteria(searchTermsFromChildForm));
  }
}
