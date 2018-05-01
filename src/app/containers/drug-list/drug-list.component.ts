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

  constructor(private store: Store<fromRoot.AppState>) { 
      this.searchTerms = store.select(state => state.drugList.searchTerms);
      this.drugListCollection = store.select(state => state.drugList.searchResults);
      this.resultsCount = store.select(state => state.drugList.resultsCount);
    }

  ngOnInit() {
  }

  performSearch(searchTermsFromChildForm: string[]): void {
    this.store.dispatch(new DrugListActions.DrugListStoreSearchCriteria(searchTermsFromChildForm))
  }
}
