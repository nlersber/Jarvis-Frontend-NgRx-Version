import { Routes } from '@angular/router';
import { ShopContainerComponent } from './shop/components/shop-container/shop-container.component';
import { LoginComponent } from './login/components/login/login.component';
import { RegisterComponent } from './login/components/register/register.component';


export const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "shop", component: ShopContainerComponent },
  { path: '', redirectTo: "shop", pathMatch: "full" }
];

