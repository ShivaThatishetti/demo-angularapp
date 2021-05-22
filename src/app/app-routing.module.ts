import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikesComponent } from './bikes/bikes.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import {TelivisionComponent} from './telivision/telivision.component'
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component'
import { TestComponent } from './test/test.component';
import { UserListComponent } from './user-list/user-list.component';
import { TelivisionDetailsComponent } from './user-details_for_users/telivision-details.component';
import { ViewMobilesComponent } from './view-mobiles/view-mobiles.component';
import { AddMobilesComponent } from './add-mobiles/add-mobiles.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"Test",component:TestComponent},
  {path:'Users/:id',component:TelivisionDetailsComponent},
  {path:"contactus",component:ContactComponent},
  {path:'Users',component:UserListComponent},
  {path:"products",component:ProductsComponent,children:[
    {path:"phones",component:MobilesComponent,children:[
      {path:'ViewMobiles',component:ViewMobilesComponent},
      {path:'AddMobiles',component:AddMobilesComponent},
      {path:"",redirectTo:'/products/phones/ViewMobiles',pathMatch:"full"}]},
    {path:"bikes",component:BikesComponent},
    {path:"laptops",component:TelivisionComponent},
    {path:"",redirectTo:'/products/phones/ViewMobiles',pathMatch:"full"}
  ]},
  {path:"",redirectTo:'/home',pathMatch:"full"},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),canActivate:[AdminGuard] },
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
