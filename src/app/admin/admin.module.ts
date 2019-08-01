import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Routes } from '@angular/router';
import { ItemsComponent } from './management/items/items.component';
import { UsersComponent } from './management/users/users.component';

const routes: Routes = [
  { path: "management/items", component: ItemsComponent },
  { path: "management/users", component: UsersComponent },
  { path: 'management', redirectTo: "management/items", pathMatch: "full" }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
