import { Routes } from '@angular/router';
import { AuthenticationContainerComponent } from './login/components/authentication-container/authentication-container.component';
import { ShopContainerComponent } from './shop/components/shop-container/shop-container.component';


export const routes: Routes = [
  {path: "auth", component: AuthenticationContainerComponent},
  {path: "shop", component: ShopContainerComponent},
  {path: '', redirectTo: "auth", pathMatch: "full"}
];

