import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  constructor(private pd:DataService) { }
mobiles:any
  ngOnInit(): void {
    this.pd.getMobilesData1().subscribe(obj=>{this.mobiles=obj},err=>{console.log('Error',err)})
  }

}
