import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Filter } from '../models/filter.model'

export const CHANGE_FILTER = '[FILTER] Change'

export class ChangeFilter implements Action {
    readonly type = CHANGE_FILTER

    constructor(public payload: Filter) { }

}

export type Actions = ChangeFilter