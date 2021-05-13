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

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"contactus",component:ContactComponent},
  {path:"products",component:ProductsComponent,children:[
    {path:"phones",component:MobilesComponent},
    {path:"bikes",component:BikesComponent},
    {path:"laptops",component:TelivisionComponent},
    {path:"",redirectTo:'/products/phones',pathMatch:"full"}
  ]},
  {path:"",redirectTo:'/home',pathMatch:"full"},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
