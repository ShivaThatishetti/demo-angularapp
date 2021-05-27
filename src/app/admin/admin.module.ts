import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AdminComponent,
    ViewProductsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class AdminModule { }
