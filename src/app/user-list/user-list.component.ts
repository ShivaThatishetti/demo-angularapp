import { Component, OnDestroy, OnInit } from '@angular/core';
import { FakeDataService } from '../fake-data.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit,OnDestroy
{
  constructor(private hc:FakeDataService,private router:Router){}
  user:any
  subscrib:Subscription
  ngOnInit()
  {
    this.subscrib=this.hc.getusers().subscribe(data=>{this.user=data},err=>{console.log("Error",err)})
  }
  ngOnDestroy()
  {
    this.subscrib.unsubscribe()
  }
  onSelectId(id)
  {
    this.router.navigateByUrl('Users/'+id)
  }
}
