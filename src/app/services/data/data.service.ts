import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from "rxjs";
import { Filter } from '../../models/filter';
import * as FilterActions from "../../actions/filter.action";
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Item } from 'src/app/models/item';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

interface AppState {
  message: Filter
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  message: Observable<Filter>

  constructor(private store: Store<AppState>, private http: HttpClient) {
    this.message = this.store.select('message')
  }

  changeFilter(type: string, value: number) {
    this.store.dispatch(new FilterActions.ChangeFilter({ type: type, value: value }))
  }

  getRemoteData(): Observable<Item[]> {
    let temp = this.http.get(`${environment.apiUrl}/item/`)
      .pipe(map((list: any[]): Item[] => list.map(Item.fromJson))
      );
    return temp;
  }


  getImage(name: string): string {
    return `assets/${name.split(" ").join("_").toLowerCase()}.jpg`;
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    //return observableThrowError(errMsg);
  }

  placeOrder(items: any) {
    console.log(JSON.stringify(items));
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(`${environment.apiUrl}/Order/`, items, { headers })
  }
}
