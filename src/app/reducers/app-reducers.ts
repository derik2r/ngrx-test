import * as fromDrugList from './drug-list.reducer';

// Model the application level state (combining all sub states)
export interface AppState {
    drugListState: fromDrugList.DrugListState;
    // list all other sub states here...
}

// Combine all sub reducers 
export const reducers = {
    drugListReducer: fromDrugList.reducer,
    // list all other sub reducers here...
};