import * as fromDrugList from './drug-list.reducer';

// Model the application level state (combining all sub states)
export interface AppState {
    drugList: fromDrugList.DrugListState;
    // list all other sub states here...
}

// Combine all sub reducers 
export const reducers = {
    drugList: fromDrugList.reducer,
    // list all other sub reducers here...
};

export function selectDrugListResults(state: AppState) {
    return state.drugList.searchResults;
}

export function selectDrugListSearchTerms(state: AppState) {
    return state.drugList.searchTerms;
}

export function selectDrugListResultsCount(state: AppState) {
    return state.drugList.resultsCount;
}

export function selectDrugListRetrieveFlag(state: AppState) {
    return state.drugList.retrieveFlag;
}

