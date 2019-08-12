import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../maincontainer/maincontainer.component';

@Component({
  selector: 'shop-container',
  templateUrl: './shop-container.component.html',
  styleUrls: ['./shop-container.component.scss']
})
export class ShopContainerComponent implements OnInit {

  private user: User
  private name: string = ''
  private balance: number = 0

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.user.subscribe(s => {
      this.user = s
      this.name = s.name
      this.balance = s.balance
    })
  }

}
