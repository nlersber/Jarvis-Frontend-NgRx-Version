import * as FilterActions from "../actions/filter.action";
import { PriceFilter } from '../models/priceFilter';

export type Action = FilterActions.Filters

const defaultFilter: PriceFilter = new PriceFilter('all', 0);

const newState = (state, data: PriceFilter) => {
    return Object.assign({}, state, data)
}

export function filterReducer(state: PriceFilter = defaultFilter, action: Action) {
    switch (action.type) {
        case FilterActions.CHANGE_FILTER:
            //const temp = newState(state, action.payload)
            return action.payload
        default: break;
    }
    return defaultFilter
}