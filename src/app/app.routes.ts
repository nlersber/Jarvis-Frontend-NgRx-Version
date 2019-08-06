import { Routes } from '@angular/router';
import { AuthGuard } from './login/guard/auth.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


export const routes: Routes = [
  { path: "shop", canActivate: [AuthGuard], loadChildren: './shop/shop.module#ShopModule' },
  { path: '**', component: PagenotfoundComponent},
  { path: '', redirectTo: "shop", pathMatch: "full" }
];

