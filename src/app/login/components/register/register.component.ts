import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public form: FormGroup

  constructor(private builder: FormBuilder, private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.form = this.builder.group({

      username: this.builder.control('', [Validators.required, Validators.minLength(6), Validators.maxLength(12),
         Validators.pattern(new RegExp("[^@]"))/*, serverSideValidateUsername(this.authService.checkUserNameAvailability)*/]),
      
      email: this.builder.control('', [Validators.required, Validators.pattern(new RegExp("@"))]),
      passwordGroup: this.builder.group({
        password: this.builder.control('', [Validators.required, Validators.minLength(8)]),
        passwordConfirm: this.builder.control('', Validators.required)
      }, { validators: comparePasswords })
    })
  }

  onSubmit() {
    this.authService.register(this.form.value.username, this.form.value.email, this.form.get('passwordGroup').value.password).subscribe(s => {
      if (s) {
        if (this.authService.redirectUrl) {
          this.router.navigateByUrl(this.authService.redirectUrl)
          this.authService.redirectUrl = undefined
        } else {
          this.router.navigate(['shop'])
        }
      }
    } //TODO: error msg
    )
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


