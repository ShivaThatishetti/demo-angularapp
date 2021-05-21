import { Component, OnInit } from '@angular/core';
import {Products1} from '../models/user.models'
import { DataService } from '../data.service'
import {HttpClient} from '@angular/common/http'
import {Observable, observable} from 'rxjs'


@Component({
  selector: 'app-view-mobiles',
  templateUrl: './view-mobiles.component.html',
  styleUrls: ['./view-mobiles.component.css']
})
export class ViewMobilesComponent implements OnInit {

   //inject obj of data service class
   constructor(private dsObj:DataService){ }
   ngOnInit()
   {
    this.dsObj.getMobilesData1().subscribe(data=>{this.mobiles=data},err=>{console.log('err is',err)})
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
