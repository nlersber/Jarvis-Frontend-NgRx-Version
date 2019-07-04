import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { filterReducer } from "./reducers/filterReducer";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
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
