import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from "rxjs";
import { Filter } from '../../models/filter';
import * as FilterActions from "../../actions/filter.action";

interface AppState {
  message: Filter
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  message: Observable<Filter>

  constructor(private store: Store<AppState>) {
    this.message = this.store.select('message')
  }

  changeFilter(type: string, value: number) {
    this.store.dispatch(new FilterActions.ChangeFilter({ type: type, value: value }))
  }
}
