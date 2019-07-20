import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { LoginServiceService } from "./login-service.service";

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



