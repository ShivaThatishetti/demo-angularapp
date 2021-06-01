import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ViewProductsComponent } from './view-products/view-products.component';

const routes: Routes = [
  { path: '', component: AdminComponent,children:[
    {path:'viewproducts',component:ViewProductsComponent}] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
