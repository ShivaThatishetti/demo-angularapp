import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FakeDataService } from '../fake-data.service';
import {Post} from '../models/user.models'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit , OnDestroy{

  
  MySubscription:Subscription
  constructor(private fsObj:FakeDataService) { }

  array:Post[]=[]
  ngOnInit()
   {
    // this.MySubscription=this.fsObj.getposts().subscribe(data=>{this.array=data},err=>{console.log("Error",err)})

    this.MySubscription=this.fsObj.getUsers().subscribe(data=>{this.array=data},err=>{console.log("Error",err)})
            
   }
  ngOnDestroy()
  {
    this.MySubscription.unsubscribe()
  }

  
  

}
