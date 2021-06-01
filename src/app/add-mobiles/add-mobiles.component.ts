import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { mobiles } from '../models/user.models';

@Component({
  selector: 'app-add-mobiles',
  templateUrl: './add-mobiles.component.html',
  styleUrls: ['./add-mobiles.component.css']
})
export class AddMobilesComponent implements OnInit {

  constructor(private dsobj:DataService,private router:Router) { }

  ngOnInit(): void {
  }
mobileModel=new mobiles('','','')
onSubmitNewMobile()
{
  this.dsobj.createNewMobile(this.mobileModel).subscribe(res=>{this.router.navigateByUrl('products/phones')},
  err=>{console.log('Error',err)})}
}
