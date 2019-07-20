import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { LoginServiceService } from "./login-service.service";

//i used this to prevent accessing the page unless you are logged in or 
//it will redirect you to the login page
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: LoginServiceService, public router: Router) {}
  canActivate(): boolean {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(["login"]);
      return false;
    }
    return true;
  }
}
//i used this to prevent the user from acessing the login page unless he is logged in
@Injectable()
export class AuthGuardLoginService implements CanActivate {
  constructor(public auth: LoginServiceService, public router: Router) {}
  canActivate(): boolean {
    if (this.auth.isLoggedIn()) {
      this.router.navigateByUrl('/UserList/1');
      return false;
    }
    return true;
  }
}



