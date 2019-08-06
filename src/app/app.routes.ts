import { Routes } from '@angular/router';
import { ItemsComponent } from './admin/components/items/items.component';
import { UsersComponent } from './admin/components/users/users.component';
import { AuthGuard } from './login/guard/auth.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


export const routes: Routes = [
  { path: '', redirectTo: 'shop', pathMatch: 'full' },
  { path: 'shop', canActivate: [AuthGuard], loadChildren: './shop/shop.module#ShopModule' },
  { path: 'itemManagement', component: ItemsComponent },
  { path: 'userManagement', component: UsersComponent },
  { path: '**', component: PagenotfoundComponent }
];

