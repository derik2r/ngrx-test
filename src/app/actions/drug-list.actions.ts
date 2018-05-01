import { Action } from '@ngrx/store'; 
import { DrugList } from '../models';


export const DRUG_LIST_STORE_SEARCH_CRITERIA = '[Drug List] Store Search Criteria';
export const DRUG_LIST_STORE_SEARCH_RESULTS = '[Drug List] Store Search Results'; 
export const DRUG_LIST_STORE_RESULTS_COUNT = '[Drug List] Store Results Count';

export class DrugListStoreSearchCriteria implements Action {
    readonly type = DRUG_LIST_STORE_SEARCH_CRITERIA;
    constructor(public payload: string[]) {}
}

export class DrugListStoreSearchResults implements Action {
    readonly type = DRUG_LIST_STORE_SEARCH_RESULTS;
    constructor(public payload: DrugList[]) {}
}

export class DrugListStoreResultsCount implements Action {
    readonly type = DRUG_LIST_STORE_RESULTS_COUNT;
    constructor(public payload: number) {}
}

export type All 
    = DrugListStoreSearchCriteria 
    | DrugListStoreSearchResults 
    | DrugListStoreResultsCount;



