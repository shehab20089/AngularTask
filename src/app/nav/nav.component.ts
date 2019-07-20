import { Component, EventEmitter, Input, Output, OnInit } from "@angular/core";
import { LoginServiceService } from "../login-service.service";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  //this to transfer the data from child component to parent app cmponent
  @Output() OutPut = new EventEmitter<string>();
//added login service to implelemt =authintication 
//and alsod added the router to use navigation
  constructor(
    public loginServ: LoginServiceService,
    public _Router: Router
  ) {}

  ngOnInit() {}
  //this function will be called when pressing logout button to remove the token from local storage
  handleLogOut() {
    this.loginServ.Logout();
    this._Router.navigateByUrl("/login");
  }

  ChangeLang(langstr) {
    //this wil call the function in the parent and pass to it the language string
    this.OutPut.emit(langstr);
  }
}
