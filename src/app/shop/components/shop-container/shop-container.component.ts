import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/login/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'shop-container',
  templateUrl: './shop-container.component.html',
  styleUrls: ['./shop-container.component.scss']
})
export class ShopContainerComponent implements OnInit {

  private user: User
  private name: string = ''
  private balance: number = 0

  constructor(private auth: AuthenticationService, private router: Router) {

  }

  ngOnInit() {
    this.auth.getUser().subscribe(s => {
      this.user = s
      this.name = s.name
      this.balance = s.balance
    })
  }

  logout() {
    this.auth.logout()
    this.router.navigate(['login'])
  }

}

export class User {
  constructor(public readonly name: string, public readonly email: string, public balance: number) { }
}
