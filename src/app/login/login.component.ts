import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  users=[];
  uobj:user={uname:'',dob:'',cont:'',mail:'',password:''}
  //list of user array
  addUserData()
  {
    let obj=this.uobj
    console.log(obj)
    //this.users.push(uobj);
    //ref.reset();
    this.uobj={uname:'',dob:'',cont:'',mail:'',password:''}
  }
  //deleteing username
    deleteUser(index)
  {
    
    this.users.splice(index,1)
  }


}





class user
{
  uname:string
  dob:string
  cont:string
  mail:string
  password:string
}