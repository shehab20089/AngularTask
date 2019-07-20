import { Injectable } from "@angular/core";
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: "root"
})
// i used this service to handle all authintcation operations
export class LoginServiceService {
  SysUseers = [
    {
      email: "admin1@admin.com",
      password: "1234",
      userType: "admin"
    },
    {
      email: "user1@user.com",
      password: "1234",
      userType: "user"
    }  
  ];
  //I used toastr service to implement ntoification
  
  constructor(private tostarService:ToastrService) {}

  //function to check if the user is logged in or not 
isLoggedIn(){
  if(JSON.parse(localStorage.getItem('token')))
  
  return true;
  
  return false;
}
//get the data of the current user who is logged in 
getCurrentUser(){
  if(this.isLoggedIn())
  return JSON.parse(localStorage.getItem('token'))
}

//this to check if the current user is admin or not 
isAdmin()
{
  if(this.isLoggedIn()){
    return JSON.parse(localStorage.getItem('token'))['userType']=="admin";
  }
}

//used to log out by removing the user token from the local storage

Logout(){
  localStorage.removeItem('token');
}
//is used to loggin the user by ensureing the data enterd is correct
 Login(enterdUser)
{
  if(!this.isLoggedIn()){
  var  user=this.SysUseers.filter(i=>{
    return i.email == enterdUser['email']   && i.password== enterdUser['password']
  })
 if(user.length>0 )
 {
this.tostarService.success('Nice Seeing you ',`Welcome ${enterdUser['email']}`);

  localStorage.setItem('token', JSON.stringify(user[0]));
  return;
 }
this.tostarService.error('sorry  ',`either email or password is wrong`);

}
}
}
 