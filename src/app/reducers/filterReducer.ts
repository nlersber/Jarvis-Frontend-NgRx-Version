import * as FilterActions from "../actions/filter.action";
import { Filter } from "../models/filter";

export type Action = FilterActions.Filters

const defaultFilter = {
    type: 'all',
    value: 0
}

const newState = (state, data) => {
    return Object.assign({}, state, data)
}

export function filterReducer(state: Filter = defaultFilter, action: Action) {
    console.log(action ? action.type : "action null", state)

    switch (action.type) {
        case FilterActions.CHANGE_FILTER:
            return newState(state, action.payload)
        default:
            return defaultFilter

    }

}