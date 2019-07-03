import { Action } from '@ngrx/store'
import { Filter } from './../models/filter.model'
import * as FilterActions from './../actions/jarvis.actions'

const defaultFilter: Filter = {
    type: "all",
    value: 0
}

export function filterReducer(state: Filter[] = [defaultFilter], action: FilterActions.Actions) {
    switch (action.type) {
        case FilterActions.CHANGE_FILTER:
            return [...state, action.payload]
        default:
            return state
    }
}