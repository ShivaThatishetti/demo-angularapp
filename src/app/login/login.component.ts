import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router){}
userId:any
pswrd:any
  onLogin()
  {
    if(this.userId=='admin' && this.pswrd=='admin')
    {
      this.router.navigateByUrl('admin')
    }
    else
    {
      alert("Invalid details")
    }   
  }
}

