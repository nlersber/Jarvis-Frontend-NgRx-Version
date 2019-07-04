import { Injectable, Output } from '@angular/core';
import { throwError as observableThrowError, Observable } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Item } from './item/item.model';
import { EventEmitter } from 'events';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { }

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
    return observableThrowError(errMsg);
  }

  placeOrder(items: any) {
    console.log(JSON.stringify(items));
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(`${environment.apiUrl}/Order/`, items, { headers })
  }

}
