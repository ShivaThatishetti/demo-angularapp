import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component'
import {UserRegistrationComponent} from './user-registration/user-registration.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { BikesComponent } from './bikes/bikes.component'
import { TelivisionComponent } from './telivision/telivision.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BikeDetailsComponent } from './bike-details/bike-details.component';
import {HttpClientModule} from '@angular/common/http';
import { TestComponent } from './test/test.component';
import { AddMobilesComponent } from './add-mobiles/add-mobiles.component';
import { ViewMobilesComponent } from './view-mobiles/view-mobiles.component';
import { SquarePipe } from './square.pipe';
import { SearchPipe } from './search.pipe'

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserRegistrationComponent,
    ProductsComponent,
    FooterComponent,
    ProductDetailsComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ContactComponent,
    BikesComponent,
    TelivisionComponent,
    MobilesComponent,
    BikesComponent,
    PagenotfoundComponent,
    BikeDetailsComponent,
    TestComponent,
    AddMobilesComponent,
    ViewMobilesComponent,
    SquarePipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
