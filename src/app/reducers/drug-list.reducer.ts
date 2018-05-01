import { DrugList } from '../models';
import * as DrugListActions from '../actions';


export interface DrugListState {
    searchTerms: string[];
    searchResults: DrugList[];
    resultsCount: number;
}

const initialState: DrugListState = {
    searchTerms: [],
    searchResults: [],
    resultsCount: 0
};

export function reducer(state = initialState, action: DrugListActions.All): DrugListState {
    switch(action.type) {
        case DrugListActions.DRUG_LIST_STORE_SEARCH_CRITERIA: {
            return {
                ...state,
                searchTerms: action.payload
            };
        }
        case DrugListActions.DRUG_LIST_STORE_SEARCH_RESULTS: {
            return {
                ...state,
                searchResults: action.payload
            }
        }
        case DrugListActions.DRUG_LIST_STORE_RESULTS_COUNT: {
            return {
                ...state,
                resultsCount: action.payload
            }
        }
        default: {
            return state;
        }
    }
}