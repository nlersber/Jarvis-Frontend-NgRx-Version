import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchPipe } from '../pipes/search/search.pipe';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { FiltersComponent } from './components/filters/filters/filters.component';
import { PricePipe } from '../pipes/price/price.pipe';
import { CartComponent } from './components/cart/cart.component';
import { ItemThumbnailComponent } from './components/item-thumbnail/item-thumbnail.component';
import { FilterContainerComponent } from './components/filters/filter-container/filter-container.component';
import { ShopContainerComponent } from './components/shop-container/shop-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'shop', component: ShopContainerComponent }
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
  ],
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    CommonModule
  ]
})
export class ShopModule { }
