import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from '../admin/components/items/items.component';
import { UsersComponent } from '../admin/components/users/users.component';
import { AuthGuard } from '../login/guard/auth.guard';
import { PricePipe } from '../pipes/price/price.pipe';
import { SearchPipe } from '../pipes/search/search.pipe';
import { CartComponent } from './components/cart/cart.component';
import { FilterContainerComponent } from './components/filters/filter-container/filter-container.component';
import { FiltersComponent } from './components/filters/filters/filters.component';
import { ItemThumbnailComponent } from './components/item-thumbnail/item-thumbnail.component';
import { ShopContainerComponent } from './components/shop-container/shop-container.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';

const routes: Routes = [
  { path: '', redirectTo: 'shop', pathMatch: 'full' },
  { path: 'shop', canActivate: [AuthGuard], component: ShopContainerComponent },
  { path: 'itemManagement', component: ItemsComponent },
  { path: 'userManagement', component: UsersComponent }
]


@NgModule({
  declarations: [
    SearchPipe,
    ShowcaseComponent,
    FiltersComponent,
    PricePipe,
    CartComponent,
    ItemThumbnailComponent,
    FilterContainerComponent,
    ShopContainerComponent,
    ItemsComponent,
    UsersComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ], exports: [RouterModule]
})
export class ShopModule { }
