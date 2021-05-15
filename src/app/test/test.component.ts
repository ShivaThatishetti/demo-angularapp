import { Component, OnDestroy, OnInit } from '@angular/core';
import { FakeDataService } from '../fake-data.service';
import {Post} from '../models/user.models'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit , OnDestroy{

  
  MySubscription:any
  constructor(private fsObj:FakeDataService) { }

  array:Post[]=[]
  ngOnInit(): void
   {
    this.MySubscription=this.fsObj.getposts().subscribe(data=>{this.array=data},err=>{console.log("Error",err)})
    
   }
  ngOnDestroy()
  {
    this.MySubscription.unsubscribe()
  }

  
  

}
