import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent  {

  users=[];
  uobj:user={uname:'',dob:'',cont:'',mail:''}
  //list of user array
  addUserData()
  {
    let obj=this.uobj
    console.log(obj)
    //this.users.push(uobj);
    //ref.reset();
    this.uobj={uname:'',dob:'',cont:'',mail:''}
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
}