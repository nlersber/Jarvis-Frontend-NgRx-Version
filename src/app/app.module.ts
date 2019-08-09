import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app-component/app.component';
import { AuthModule } from './login/auth.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { filterReducer } from "./reducers/filterReducer";
import { CartService } from './services/cart/cart.service';
import { DataService } from './services/data/data.service';
import { ShopModule } from './shop/shop.module';

const routes: Routes = [
  // { path: '', redirectTo: 'shop', pathMatch: 'full' },
 // { path: 'shop', canActivate: [AuthGuard], loadChildren: './shop/shop.module#ShopModule' },

  // { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({
      filter: filterReducer
    }),
    HttpClientModule,
    AuthModule,
    ShopModule
  ],
  exports: [RouterModule],
  providers: [
    DataService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
