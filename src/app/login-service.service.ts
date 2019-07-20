import { Injectable } from "@angular/core";
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: "root"
})
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
  
  constructor(private tostarService:ToastrService) {}

isLoggedIn(){
  if(JSON.parse(localStorage.getItem('token')))
  
  return true;
  
  return false;
}
getCurrentUser(){
  if(this.isLoggedIn())
  return JSON.parse(localStorage.getItem('token'))
}

isAdmin()
{
  if(this.isLoggedIn()){
    return JSON.parse(localStorage.getItem('token'))['userType']=="admin";
  }
}


Logout(){
  localStorage.removeItem('token');
}

 Login(enterdUser)
{
  if(!this.isLoggedIn()){
  var  user=this.SysUseers.filter(i=>{
    return i.email == enterdUser['email']&& i.password== enterdUser['password']
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
 