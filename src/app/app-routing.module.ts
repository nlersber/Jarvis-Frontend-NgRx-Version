import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationContainerComponent } from './login/components/authentication-container/authentication-container.component';
import { ShopContainerComponent } from './shop/components/shop-container/shop-container.component';


const routes: Routes = [
  {path: "", component: AuthenticationContainerComponent},
  {path: "shop", component: ShopContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
