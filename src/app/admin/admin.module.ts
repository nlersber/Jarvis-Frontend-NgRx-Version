import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Routes } from '@angular/router';
import { ItemsComponent } from './components/items/items.component';
import { UsersComponent } from './components/users/users.component';
import { ManagementService } from './services/management.service';

const routes: Routes = [
  { path: "management/items", component: ItemsComponent },
  { path: "management/users", component: UsersComponent },
  { path: 'management', redirectTo: "management/items", pathMatch: "full" }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ManagementService
  ]
})
export class AdminModule { }
