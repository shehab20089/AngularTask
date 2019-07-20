import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserServiceService } from "../user-service.service";

@Component({
  selector: "app-edit-user",
  templateUrl: "./edit-user.component.html",
  styleUrls: ["./edit-user.component.css"]
})
export class EditUserComponent implements OnInit {
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _UserServiceService: UserServiceService
  ) {}
  oldval = {};
  uid;

  ngOnInit() {
    this._activatedRoute.params.subscribe(data => {
      console.log(data.unum);
      this.uid = data.unum;
      this.oldval = this._UserServiceService.getUserById(data.unum);
      var editfrm = document.getElementById("frm3");
      (<HTMLInputElement>(
        editfrm.querySelector("#nameInput")
      )).value = this.oldval["name"];
      (<HTMLInputElement>(
        editfrm.querySelector("#exampleInputEmail1")
      )).value = this.oldval["email"];
      (<HTMLInputElement>editfrm.querySelector("#phoneInput")).value =
        this.oldval["phone"] + "";
      (<HTMLInputElement>(
        editfrm.querySelector("#StatusSelect")
      )).value = this.oldval["Status"];
    });
  }
  HandleEditing(e) {
    console.log(e);
    e.preventDefault();
    console.log(this.uid)
    let obj = {
      name: e.target.querySelector("#nameInput").value,
      email: e.target.querySelector("#exampleInputEmail1").value,
      phone: e.target.querySelector("#phoneInput").value,
      id: this.uid,
      Status: e.target.querySelector("#StatusSelect").value
    };
    console.log(obj);
    this._UserServiceService.editUser(obj);
    this.oldval = this._UserServiceService.getUserById(this.uid);
    this._router.navigateByUrl('UserList/1')
  }
}
