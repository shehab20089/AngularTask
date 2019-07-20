import { Component, OnInit } from "@angular/core";
import {  LoginServiceService} from "../login-service.service";
import {Router} from '@angular/router';

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.css"]
})
export class LoginPageComponent implements OnInit {
  constructor(private loginser:LoginServiceService,private _router:Router) {}

  ngOnInit() {}

  HandleLogin(e) {
    console.log(e);
    e.preventDefault();
    var obj = {
      email: e.target.querySelector("#loginemail").value,
      password: e.target.querySelector("#loginpass").value
    };
  this.loginser.Login(obj)
  if(this.loginser.isLoggedIn())
  this._router.navigateByUrl('/UserList/1');

  }
}
