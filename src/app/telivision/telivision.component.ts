import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {bikeProducts, Products1} from '../models/user.models'

@Component({
  selector: 'app-telivision',
  templateUrl: './telivision.component.html',
  styleUrls: ['./telivision.component.css']
})
export class TelivisionComponent implements OnInit {

  constructor(private tvObj:DataService) { }

  ngOnInit(): void 
  {
    this.tvObj.getLaptopData().subscribe(obj=>{this.products=obj},err=>{console.log('Error',err)})
  }
  products:Products1[]=[]
  
    productsSentByChild=[]
    productCount=0
    getProductDetailsFromChild(productTitle)
    {
      this.productsSentByChild.push(productTitle)
      this.productCount++
    }
  

}
