import { Component, OnInit } from '@angular/core';
import {Products} from '../models/user.models'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent 
 {

  products:Products[]=[
  {ProductTitle:"Meteor 350",cost:"1,85,642",EngineCapacity:"349cc",Mileage :"35kmpl",KerbWeight:"191kgs",Image:"https://img.etimg.com/thumb/msid-79080152,width-640,resizemode-4,imgsize-86597/royal-enfields-all-new-cruiser.jpg"},
  {ProductTitle:"Classic 350",cost:"1,67,763",EngineCapacity:"346cc",Mileage :"35kmpl",KerbWeight:"195kgs",Image:"https://images.financialexpress.com/2020/11/Royal-Enfield-Classic-350-Orange-Ember.jpg?w=692"},
  {ProductTitle:"Himalayan",cost:"1,91,847",EngineCapacity:"411cc",Mileage :"30kmpl",KerbWeight:"199kgs",Image:"https://bd.gaadicdn.com/processedimages/royal-enfield/himalayan-bs6/494X300/himalayan-bs660261c17ebf8c.jpg?tr=w-360"},
  {ProductTitle:"interceptor 650",cost:" 2,72,094",EngineCapacity:"648cc",Mileage :"24kmpl",KerbWeight:"202kgs",Image:"https://c.ndtvimg.com/2018-09/2fl29g2g_royal-enfield-interceptor-650_650x400_25_September_18.jpg"},
  {ProductTitle:"Bullet 350 ",cost:" 1,30,725",EngineCapacity:"346cc",Mileage :"37kmpl",KerbWeight:"186kgs",Image:"https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/02/capture-1578712285-1582699024.jpg"},
  {ProductTitle:"Thunder bird 350X",cost:"1,56,496",EngineCapacity:"346cc",Mileage :"35kmpl",KerbWeight:"192kgs",Image:"https://images.carandbike.com/bike-images/medium/royal-enfield/thunderbird-350x/royal-enfield-thunderbird-350x.jpg?v=6"},
   ]

  productsSentByChild=[]
  productCount=0
  getProductDetailsFromChild(productTitle)
  {
    this.productsSentByChild.push(productTitle)
    this.productCount++
  }

}

