import { Component, OnInit } from '@angular/core';
import {Products1} from '../models/user.models'
import { DataService } from '../data.service'

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {
  //inject obj of data service class
  constructor(private dsObj:DataService){ }
  ngOnInit()
  {
   this.mobiles=this.dsObj.getMobilesData()
  }
  mobiles:Products1[]=[]
  
    productsSentByChild=[]
    productCount=0
    getProductDetailsFromChild(productTitle)
    {
      this.productsSentByChild.push(productTitle)
      this.productCount++
    }
  
}
