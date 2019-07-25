import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errors: { "username": false, "password": false }
  form: FormGroup

  constructor(private router: Router) {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })

  }

  ngOnInit() {
  }

  next() {
    if (this.form.valid)
      this.router.navigate(["shop"])
    else
      this.placeErrorMessage()
  }

  placeErrorMessage(){
    if(this.form.get('username').invalid)
    this.errors.username
  }

}
