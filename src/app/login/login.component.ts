import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router){}
  n=12345
  roi=0.12
  today=new Date()
  num=4
userId:any
pswrd:any
  onLogin()
  {
    if(this.userId=='a' && this.pswrd=='a')
    {
      localStorage.setItem("Username","a")
      this.router.navigateByUrl('admin')
    }
    else
  
    {
      alert("Invalid details")
    }   
  }
}

