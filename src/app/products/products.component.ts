import { Component, OnInit } from '@angular/core';
import {Products} from '../models/user.models'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent 
 {

  products:Products[]=[{ProductTitle:"Technology-1",discription:"hjh",Image:"http://media.noria.com/sites/Uploads/2019/11/19/3ad0b198-2717-4831-a344-f2e35e943bae_ArticleImages_RP31161_1234x694_08022019_extra_large.jpeg"},
  {ProductTitle:"Technology-2",discription:"hjh",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjl2nCsnUzWjnM9ABXn08dw-Di9ZHv9DBLCQ&usqp=CAU"},
  {ProductTitle:"Technology-3",discription:"hjh",Image:"https://maximopc.org/wp-content/uploads/2020/05/Emerging-Technologies.jpg"},
  {ProductTitle:"Technology-4",discription:"hjh",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxKWxH9Pr9AGJImX-T3ExQeaO6JX7pk62C6Q&usqp=CAU"},
  {ProductTitle:"Technology-5",discription:"hjh",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfR_PjgtfIGzBgKGjofzrx2fmoat-qiQuUbA&usqp=CAU"},
  {ProductTitle:"Technology-6",discription:"hjh",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjl2nCsnUzWjnM9ABXn08dw-Di9ZHv9DBLCQ&usqp=CAU"}
  ]

  productsSentByChild=[]
  productCount=0
  getProductDetailsFromChild(productTitle)
  {
    this.productsSentByChild.push(productTitle)
    this.productCount++
  }

}

