import { Component, OnInit } from '@angular/core';

import { DrugListService } from '../../services';
import { DrugList } from '../../models/drug-list.model';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as DrugListActions from '../../actions/drug-list.actions';
import * as fromRoot from '../../reducers/app-reducers';


@Component({
  selector: 'app-drug-list',
  templateUrl: './drug-list.component.html',
  styleUrls: ['./drug-list.component.scss'],
  providers: [ DrugListService ]
})
export class DrugListComponent implements OnInit {

  private searchTerms: Observable<string[]>;
  private drugListCollection: Observable<DrugList[]>;

  constructor(
    private drugListService: DrugListService,
    private store: Store<fromRoot.AppState>) { 
      this.searchTerms = store.select(state => state.drugListState.searchTerms);
      // this.drugListCollection = store.select(state => state.drugListState.searchResults);
    }

  ngOnInit() {
  }

  performSearch(searchTermsFromChildForm: string[]): void {
    console.log('PARENT = performSearch() called; Received: ' + searchTermsFromChildForm);

    this.store.dispatch(new DrugListActions.DrugListStoreSearchCriteria(searchTermsFromChildForm))

    this.drugListService.getDrugList()
      .subscribe(results => this.store.dispatch(new DrugListActions.DrugListStoreSearchResults(results))
    );
  }
}
