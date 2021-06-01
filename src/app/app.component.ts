import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from './data.service';
import {user} from  './models/user.models'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
{
constructor(public dsobj:DataService,public router:Router){}
 userLoginStatus():boolean
  {
    if(localStorage.getItem('Username')==null)
    {
      return false
    }
    else
    {
      return true
    }
  }
  
  userLogout()
   {
     localStorage.clear()
     this.router.navigateByUrl('login')
    }

}

