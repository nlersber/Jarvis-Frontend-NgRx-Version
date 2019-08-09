import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from "rxjs";
import { map } from 'rxjs/operators';
import { PriceFilter } from 'src/app/models/priceFilter';
import { environment } from '../../../environments/environment';
import * as FilterActions from "../../actions/filter.action";
import { Item } from '../../models/item';

export interface AppState {
  filter: PriceFilter
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  filter: Observable<PriceFilter>
  refresh: Subject<any>
   = new Subject()

  constructor(private store: Store<AppState>, private http: HttpClient) {
    this.filter = this.store.select('filter')
  }

  changeFilter(filter: PriceFilter) {
    this.store.dispatch(new FilterActions.ChangeFilter(filter))
  }

  getRemoteData(): Observable<Item[]> {
    let temp = this.http.get<Item[]>(`${environment.apiUrl}/item/`).pipe(map(s => s.map(t => {
      t.imgSrc = this.getImage(t.name)
      return t
    })))
    return temp
  }


  getImage(name: string): string {
    return `assets/${name.split(" ").join("_").toLowerCase()}.jpg`
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error'
    console.error(errMsg); // log to console instead
    //return observableThrowError(errMsg);
  }

  placeOrder(items: any) {
    const headers = new HttpHeaders().set('content-type', 'application/json')
    return this.http.post(`${environment.apiUrl}/Order/`, items, { headers })
  }

  triggerReloadItems() {
    this.refresh.next()
  }
}
