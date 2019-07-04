import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { filterReducer } from "./reducers/filterReducer";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app-component/app.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { FiltersComponent } from './components/filters/filters.component';
import { PricePipe } from './pipes/price.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShowcaseComponent,
    FiltersComponent,
    PricePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      message: filterReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
