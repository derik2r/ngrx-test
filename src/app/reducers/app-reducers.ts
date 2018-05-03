import * as fromWheelSet from './wheel-set.reducer';

// Model the application level state (combining all sub states)
export interface AppState {
    wheelSet: fromWheelSet.WheelSetState;
    // list all other sub states here...
}

// Combine all sub reducers 
export const reducers = {
    wheelSet: fromWheelSet.reducer,
    // list all other sub reducers here...
};

export function selectWheelSetResults(state: AppState) {
    return state.wheelSet.searchResults;
}

export function selectWheelSetSearchTerms(state: AppState) {
    return state.wheelSet.searchTerms;
}

export function selectWheelSetResultsCount(state: AppState) {
    return state.wheelSet.resultsCount;
}

export function selectWheelSetRetrieveFlag(state: AppState) {
    return state.wheelSet.retrieveFlag;
}

