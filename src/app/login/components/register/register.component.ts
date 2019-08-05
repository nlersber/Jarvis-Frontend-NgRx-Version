import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public user: FormGroup

  constructor(private builder: FormBuilder, private authService: AuthenticationService) { }

  ngOnInit() {
    this.user = this.builder.group({
      username: this.builder.control('', [Validators.required, Validators.minLength(6), Validators.maxLength(12), Validators.pattern(new RegExp("[a-zA-Z1-9]")), serverSideValidateUsername(this.authService.checkUserNameAvailability)]),
      email: this.builder.control('', [Validators.required, Validators.pattern(new RegExp("([a-zA-Z1-9]+\.*)+@([a-zA-Z1-9]+\.)+[a-zA-Z]+"))]),
      passwordGroup: this.builder.group({
        password: this.builder.control('', [Validators.required, Validators.minLength(8)]),
        passwordConfirm: this.builder.control('', Validators.required)
      }, { validators: comparePasswords })
    })
  }

}

function serverSideValidateUsername(
  checkAvailabilityFn: (n: string) => Observable<boolean>
): ValidatorFn {
  return (control: AbstractControl): Observable<{ [key: string]: any }> => {
    return checkAvailabilityFn(control.value).pipe(
      map(available => {
        if (available) {
          return null;
        }
        return { userAlreadyExists: true };
      })
    );
  };
}

function comparePasswords(control: AbstractControl): { [key: string]: any } {
  const password = control.get('password')
  const confirm = control.get('passwordConfirm')
  return password.value === confirm.value ? null : { 'passwordsDiffer': true }
}
