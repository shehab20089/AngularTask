import { Injectable } from "@angular/core";

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
  
  constructor() {}

isLoggedIn(){
  if(JSON.parse(localStorage.getItem('token')))
  
  return true;
  
  return false;
}

isAdmin()
{
  if(this.isLoggedIn()){
    return localStorage.getItem('token')['userType']=="admin";
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
  localStorage.setItem('token', JSON.stringify(user[0]));
  
 }
}
}

}

 