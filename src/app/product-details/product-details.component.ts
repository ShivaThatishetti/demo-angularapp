import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Products1} from '../models/user.models'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  
{

 @Input()  productObj:Products1; //recive data from parent
 @Output() myEvent=new EventEmitter // use send data to parent through an event

 sendProductDetailsToParent(productTitle)
 {
   
   this.myEvent.emit(productTitle) //send data to parent
 }

}
