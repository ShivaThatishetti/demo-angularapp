import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component'
import {UserRegistrationComponent} from './user-registration/user-registration.component';
import { CardsComponent } from './cards/cards.component';
import { Cards2Component } from './cards2/cards2.component';
import { Cards3Component } from './cards3/cards3.component';
import { Cards4Component } from './cards4/cards4.component';
import { Cards5Component } from './cards5/cards5.component';
import { Cards6Component } from './cards6/cards6.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailsComponent } from './product-details/product-details.component'

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserRegistrationComponent,
    CardsComponent,
    Cards2Component,
    Cards3Component,
    Cards4Component,
    Cards5Component,
    Cards6Component,
    ProductsComponent,
    FooterComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
