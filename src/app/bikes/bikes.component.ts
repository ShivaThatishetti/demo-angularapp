import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Products1} from '../models/user.models'

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {

  constructor(private bikobj:DataService) { }

  ngOnInit(): void {
    this.bikes=this.bikobj.getbikesdata()
  }
  bikes:Products1[]=[]
  
    productsSentByChild=[]
    productCount=0
    getProductDetailsFromChild(productTitle)
    {
      this.productsSentByChild.push(productTitle)
      this.productCount++
    }
  

}
