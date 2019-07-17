import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { filterReducer } from "./reducers/filterReducer";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app-component/app.component';
import { ShowcaseComponent } from './shop/components/showcase/showcase.component';
import { FiltersComponent } from './shop/components/filters/filters/filters.component';
import { PricePipe } from './pipes/price.pipe';
import { CartComponent } from './shop/components/cart/cart.component';
import { DataService } from './services/data/data.service';
import { CartService } from './services/cart/cart.service';
import { ItemThumbnailComponent } from './shop/components/item-thumbnail/item-thumbnail.component';
import { FilterContainerComponent } from './shop/components/filters/filter-container/filter-container.component';
import { ShopContainerComponent } from './shop/components/shop-container/shop-container.component';
import { LoginModule } from './login/login.module';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    ShowcaseComponent,
    FiltersComponent,
    PricePipe,
    CartComponent,
    ItemThumbnailComponent,
    FilterContainerComponent,
    ShopContainerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({
      filter: filterReducer
    }),
    HttpClientModule,
    LoginModule
  ],
  providers: [
    DataService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
