import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { Item } from 'src/app/models/item';

@Injectable({
  providedIn: 'root'
})
export class ManagementService {

  constructor(private http: HttpClient) { }

  getUserList(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/account/managementusers`)
  }

  changeItem(item: Item): Observable<boolean> {
    return this.http.put<boolean>(`${environment.apiUrl}/item/${item.id}`, item)
  }

}
