import { Action } from '@ngrx/store'; 
import { WheelSet } from '../models';


export const WHEEL_SET_STORE_SEARCH_CRITERIA = '[Wheel Set] Store Search Criteria';
export const WHEEL_SET_STORE_SEARCH_RESULTS = '[Wheel Set] Store Search Results'; 
export const WHEEL_SET_STORE_RESULTS_COUNT = '[Wheel Set] Store Results Count';
export const WHEEL_SET_STORE_RETRIEVE_FLAG = '[Wheel Set] Store Retrieve Flag';

export class WheelSetStoreSearchCriteria implements Action {
    readonly type = WHEEL_SET_STORE_SEARCH_CRITERIA;
    constructor(public payload: string[]) {}
}

export class WheelSetStoreSearchResults implements Action {
    readonly type = WHEEL_SET_STORE_SEARCH_RESULTS;
    constructor(public payload: WheelSet[]) {}
}

export class WheelSetStoreResultsCount implements Action {
    readonly type = WHEEL_SET_STORE_RESULTS_COUNT;
    constructor(public payload: number) {}
}

export class WheelSetStoreRetrieveFlag implements Action {
    readonly type = WHEEL_SET_STORE_RETRIEVE_FLAG;
    constructor(public payload: boolean) {}
}

export type All 
    = WheelSetStoreSearchCriteria 
    | WheelSetStoreSearchResults 
    | WheelSetStoreResultsCount
    | WheelSetStoreRetrieveFlag;



