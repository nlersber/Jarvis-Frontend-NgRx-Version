import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/login/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'maincontainer',
  templateUrl: './maincontainer.component.html',
  styleUrls: ['./maincontainer.component.scss']
})
export class MaincontainerComponent implements OnInit {

  private user: User
  private name: string = ''
  private balance: number = 0

  private isHistory: boolean = false

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

  toggleHistory() {
    if (this.isHistory) {
      this.router.navigate(['shop/store'])
      this.isHistory = false;
    }
    else {
      this.router.navigate(['shop/history'])
      this.isHistory = true;
    }
  }

}

export class User {
  constructor(public readonly name: string, public readonly email: string, public balance: number) { }
}

