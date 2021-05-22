import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import {mobiles} from '../../models/user.models'

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  constructor(private pd:DataService) { }
  mobiles:any
  editMobileIndex;
  editMobileObj=new mobiles('','','')
  editMobileStatus:boolean=false

  ngOnInit(): void {
    this.getMobiles()
    }

  getMobiles()
  {
    this.pd.getMobilesData1().subscribe(obj=>{this.mobiles=obj},err=>{console.log('Error',err)})
  
  }
  editMobile(mobileobj,index)
  {
    this.editMobileObj=mobileobj
    this.editMobileIndex=index
    this.editMobileStatus=true
  }
  saveMobile(modifiedMobileObj)
  {
    modifiedMobileObj.id=this.editMobileObj['id']
    modifiedMobileObj.Image=this.editMobileObj['Image']
    this.editMobileStatus=false
    this.pd.updateMobileData(modifiedMobileObj).subscribe(
      ref=>{},err=>{console.log('Error',err)})
      this.getMobiles()
  }
  deleteMobile(mobileObj)
  {
    this.pd.deleteMobiledata(mobileObj.id).subscribe(ref=>{alert('Mobile deleted')},
    err=>{console.log('Error',err)})
    this.getMobiles()
  }
}
