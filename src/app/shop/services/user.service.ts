import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthenticationService } from 'src/app/login/services/authentication.service';
import { HistoryOrder } from 'src/app/models/order';
import { User } from '../components/maincontainer/maincontainer.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: BehaviorSubject<User> = new BehaviorSubject(new User('', '', 0))
  orders: BehaviorSubject<HistoryOrder[]> = new BehaviorSubject([])

  constructor(private auth: AuthenticationService) {
    this.auth.getUser().subscribe(s => {
      this.user.next(s)
      if (this.user.getValue().name !== '')
        this.auth.getOrders().subscribe(t => this.orders.next(t))//Only when a user can be found
    })
  }

  reload() {
    this.auth.getOrders().subscribe(s => this.orders.next(s))
    this.auth.getUser().subscribe(s => this.user.next(s))
  }

  checkCredit(total: number): boolean {
    const value = this.user.getValue()
    return (!!value && this.user.getValue().balance >= total)
  }




}
