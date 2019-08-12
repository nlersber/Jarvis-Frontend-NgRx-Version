import { Component, OnInit } from '@angular/core';
import { HistoryOrder } from 'src/app/models/order';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  private orders: HistoryOrder[] = []


  constructor(private userService: UserService) {
    this.userService.orders.subscribe(s => this.orders = s)
  }

  ngOnInit() {

  }

  reload(){
    this.userService.reload()
  }

}
