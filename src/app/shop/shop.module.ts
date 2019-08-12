import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../login/guard/auth.guard';
import { PricePipe } from '../pipes/price/price.pipe';
import { SearchPipe } from '../pipes/search/search.pipe';
import { CartComponent } from './components/cart/cart.component';
import { FilterContainerComponent } from './components/filters/filter-container/filter-container.component';
import { FiltersComponent } from './components/filters/filters/filters.component';
import { ItemThumbnailComponent } from './components/item-thumbnail/item-thumbnail.component';
import { ShopContainerComponent } from './components/shop-container/shop-container.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { HistoryComponent } from './components/history/history.component';
import { MaincontainerComponent } from './components/maincontainer/maincontainer.component';

const routes: Routes = [
  {
    path: 'shop', component: MaincontainerComponent, children: [
      { path: '', redirectTo: 'store', pathMatch: 'full' },
      { path: 'store', canActivate: [AuthGuard], component: ShopContainerComponent },
      { path: 'history', canActivate: [AuthGuard], component: HistoryComponent }
    ]
  },

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
    HistoryComponent,
    MaincontainerComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ], exports: [RouterModule]
})
export class ShopModule { }
