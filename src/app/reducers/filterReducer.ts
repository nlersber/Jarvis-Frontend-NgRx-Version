import * as FilterActions from "../actions/filter.action";
import { Filter } from "../models/filter";
import { FilterType } from '../models/FilterType';

export type Action = FilterActions.Filters

const defaultFilter = {
    type: 'all',
    value: 0,
    filterType: null
}

const newState = (state, data) => {
    return Object.assign({}, state, data)
}

export function filterReducer(state: Filter = defaultFilter, action: Action) {

    console.log(state)

    switch (action.type) {
        case FilterActions.CHANGE_FILTER:
            return newState(state, { type: action.payload.type, value: action.payload.value })
        default:
            return defaultFilter

    }

}