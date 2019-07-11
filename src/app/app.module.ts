import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { filterReducer } from "./reducers/filterReducer";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app-component/app.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { FiltersComponent } from './components/filters/filters/filters.component';
import { PricePipe } from './pipes/price.pipe';
import { CartComponent } from './components/cart/cart.component';
import { DataService } from './services/data/data.service';
import { CartService } from './services/cart/cart.service';
import { ItemThumbnailComponent } from './components/item-thumbnail/item-thumbnail.component';
import { FilterContainerComponent } from './components/filters/filter-container/filter-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowcaseComponent,
    FiltersComponent,
    PricePipe,
    CartComponent,
    ItemThumbnailComponent,
    FilterContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      filter: filterReducer
    }),
    HttpClientModule
  ],
  providers: [
    DataService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
