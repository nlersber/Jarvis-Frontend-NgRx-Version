import { Action } from '@ngrx/store';
import { PriceFilter } from '../models/priceFilter';

export const CHANGE_FILTER = '[Filter] Change'

export class ChangeFilter implements Action {
    readonly type = CHANGE_FILTER

    constructor(readonly payload: PriceFilter) {
        console.log('action made')
         console.log(payload)
        }
}

export type Filters = ChangeFilter