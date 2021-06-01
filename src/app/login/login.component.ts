import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent
{
  constructor(private router:Router){}
  n=12345
  roi=0.12
  today=new Date()
  num=4
userId:any
pswrd:any
id='shiva'
ps='shiva'
  onLogin()
  {
    if(this.userId==this.id && this.pswrd==this.ps)
    {
      localStorage.setItem("Username","a")
      this.router.navigateByUrl('admin')
    }
    else if(this.userId==this.id && this.pswrd==this.ps )
    {
      alert("Invalid details")
    }  
    else if(this.userId==this.id)
    {
      alert("Invalid User Id")
    }
    else if(this.pswrd==this.ps)
    {
      alert("Invalid Password")
    } 
  }
}

