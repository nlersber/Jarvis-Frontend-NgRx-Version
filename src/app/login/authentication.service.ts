import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

function parseJwt(token) {
  if (!token)
    return null
  return JSON.parse(window.atob(token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')))
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly tokenKey = 'currentUser'
  private user$: BehaviorSubject<string>

  constructor(private http: HttpClient) {
    let parsedToken = parseJwt(localStorage.getItem(this.tokenKey))
    if (parsedToken) {
      const expires = new Date(parseInt(parsedToken.exp, 10) * 1000) < new Date()
      if (expires) {
        localStorage.removeItem(this.tokenKey)
        parsedToken = null
      }
    }
    this.user$ = new BehaviorSubject<string>(parsedToken && parsedToken.unique_name)
  }



  login(username: string, password: string): Observable<boolean> {
    return this.http.post(`${environment.apiUrl}/account`, { username, password }, { responseType: 'text' })
      .pipe(map(token => {
        if (token) {
          localStorage.setItem(this.tokenKey, token)
          this.user$.next(username)
          return true;
        }
        return false
      }))
  }

  register(name: string, email: string, password: string): Observable<boolean> {
    return this.http.post(`${environment.apiUrl}/account/register`,
      { name, email, password, passwordConfirmation: password },
      { responseType: 'text' })
      .pipe(map(token => {
        if (token) {
          localStorage.setItem(this.tokenKey, token)
          this.user$.next(name)
          return true
        }
        return false
      }))
  }

  logout() {
    if (this.user$.getValue()) {
      localStorage.removeItem('currentUser')
      this.user$.next(null)
    }
  }

  checkUserNameAvailability = (name: string): Observable<boolean> => {
    return this.http.get<boolean>(`${environment.apiUrl}/account/checkusername`,
      { params: { name } })
  }

}