import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from "../login-service.service";
import {Router} from '@angular/router'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private loginServ:LoginServiceService,
    private _Router:Router) { }

  ngOnInit() {
  }
  handleLogOut(){
    this.loginServ.Logout();
    this._Router.navigateByUrl('/login');
  }

}
