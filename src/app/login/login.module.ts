import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationContainerComponent } from './components/authentication-container/authentication-container.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';



@NgModule({
  declarations: [AuthenticationContainerComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
