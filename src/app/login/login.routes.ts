import { Route } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Route[] = [
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: 'auth', redirectTo: "login", pathMatch: "full" }
]