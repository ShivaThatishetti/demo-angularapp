import { Component, OnDestroy, OnInit } from '@angular/core';
import { FakeDataService } from '../fake-data.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit,OnDestroy
{
  constructor(private hc:FakeDataService){}
  user:any
  subscrib:Subscription
  ngOnInit()
  {
    this.subscrib=this.hc.getusers().subscribe(data=>{this.user=data;console.log(this.user.data)},err=>{console.log("Error",err)})
  }
  ngOnDestroy()
  {
    this.subscrib.unsubscribe()
  }
}
