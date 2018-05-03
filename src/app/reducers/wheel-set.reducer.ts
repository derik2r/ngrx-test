import { WheelSet } from '../models';
import * as WheelSetActions from '../actions';


export interface WheelSetState {
    searchTerms: string[];
    searchResults: WheelSet[];
    resultsCount: number;
    retrieveFlag: boolean;
}

const initialState: WheelSetState = {
    searchTerms: [],
    searchResults: [],
    resultsCount: 0,
    retrieveFlag: false
};

export function reducer(state = initialState, action: WheelSetActions.All): WheelSetState {
    switch(action.type) {
        case WheelSetActions.WHEEL_SET_STORE_SEARCH_CRITERIA: {
            return {
                ...state,
                searchTerms: action.payload
            };
        }
        case WheelSetActions.WHEEL_SET_STORE_SEARCH_RESULTS: {
            return {
                ...state,
                searchResults: action.payload
            }
        }
        case WheelSetActions.WHEEL_SET_STORE_RESULTS_COUNT: {
            return {
                ...state,
                resultsCount: action.payload
            }
        }
        case WheelSetActions.WHEEL_SET_STORE_RETRIEVE_FLAG: {
            return {
                ...state,
                retrieveFlag: action.payload
            }
        }
        default: {
            return state;
        }
    }
}