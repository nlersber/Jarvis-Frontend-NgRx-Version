import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly tokenKey = 'currentUser'
  private user$: BehaviorSubject<string>

  constructor(private http: HttpClient) {
    let parsedToken = this.parseJwt(localStorage.getItem(this.tokenKey))
    if (parsedToken) {
      const expires = new Date(parseInt(parsedToken.exp, 10) * 1000) < new Date()
      if (expires) {
        localStorage.removeItem(this.tokenKey)
        parsedToken = null
      }
    }
    this.user$ = new BehaviorSubject<string>(parsedToken && parsedToken.unique_name)
  }

  parseJwt(token) {
    if (!token)
      return null
    return JSON.parse(window.atob(token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')))
  }
}
