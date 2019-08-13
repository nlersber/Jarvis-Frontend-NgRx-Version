import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HistoryOrder } from 'src/app/models/order';
import { User } from 'src/app/shop/components/maincontainer/maincontainer.component';
import { environment } from 'src/environments/environment';

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

  public redirectUrl: string

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

  get token(): string {
    const localToken = localStorage.getItem(this.tokenKey)
    return !!localToken ? localToken : ''
  }

  get user(): BehaviorSubject<string> {
    return this.user$
  }

  return

  login(username: string, password: string): Observable<boolean> {
    const temp = new LoginDTO(username, password)
    return this.http.post(`${environment.apiUrl}/account`, temp, { responseType: 'text' })
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
    const temp = new RegisterDTO(name, email, password)
    return this.http.post(`${environment.apiUrl}/account/register`,
      temp,
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

  getUser(): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/account/getuser`, { params: { name: this.user$.getValue() } })
  }

  checkUserNameAvailability = (name: string): Observable<boolean> => {
    return this.http.get<boolean>(`${environment.apiUrl}/account/checkusername`,
      { params: { name } })
  }

  getOrders(): Observable<HistoryOrder[]> {
    return this.http.get<HistoryOrder[]>(`${environment.apiUrl}/order`, { params: { name: this.user$.getValue() } } )
  }

}

class LoginDTO {
  constructor(public username: string, public password: string) { }
}
class RegisterDTO {
  constructor(public username: string, public email: string, public password: string) { }
}
