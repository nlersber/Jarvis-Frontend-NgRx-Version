import { Action } from '@ngrx/store';
import { Filter } from '../models/filter';

export const defaultFilter: Filter = { type: 'all', value: 0 }

export function filterReducer(state: Filter = defaultFilter, action: Action) {
    switch (action.type) {
        default://Default first to fit with 'all' which should be first. Default first looks weird, 'all' last looks weird too.
        case 'all':
            return state = { type: state.type, value: state.value }
        case '<=':
            return state = { type: '<=', value: 0 }


    }
}