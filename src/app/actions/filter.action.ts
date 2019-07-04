import { Action } from '@ngrx/store';
import { Filter } from '../models/filter';

export const CHANGE_FILTER = '[Filter] Change'

export class ChangeFilter implements Action {
    readonly type = CHANGE_FILTER

    constructor(readonly payload: Filter) { }
}

export type Filters = ChangeFilter