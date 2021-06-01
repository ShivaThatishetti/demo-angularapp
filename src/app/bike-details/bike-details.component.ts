import { Component, OnInit,EventEmitter, Input,Output } from '@angular/core';
import { bikeProducts } from '../models/user.models';

@Component({
  selector: 'app-bike-details',
  templateUrl: './bike-details.component.html',
  styleUrls: ['./bike-details.component.css']
})
export class BikeDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
 @Input()  bikes:bikeProducts; //recive data from parent
 @Output() myEvent=new EventEmitter // use send data to parent through an event

 sendProductDetailsToParent(productTitle)
 {
   this.myEvent.emit(productTitle) //send data to parent
 }


}
