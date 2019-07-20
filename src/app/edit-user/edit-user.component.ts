import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserServiceService } from "../user-service.service";

@Component({
  selector: "app-edit-user",
  templateUrl: "./edit-user.component.html",
  styleUrls: ["./edit-user.component.css"]
})
export class EditUserComponent implements OnInit {
  //i used login service to implelent the curd operations of the user
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
      //i used this to populate the form with the user data before performing any update
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
  // this is used to handle the edit based to the values of the sent form
  HandleEditing(e) {
    //pervent default is used to prevent form from refreshing the page
    e.preventDefault();
    //obj is used to get the data from the form and then send it to the service to handle the edit
    let obj = {
      name: e.target.querySelector("#nameInput").value,
      email: e.target.querySelector("#exampleInputEmail1").value,
      phone: e.target.querySelector("#phoneInput").value,
      id: this.uid,
      Status: e.target.querySelector("#StatusSelect").value
    };
    this._UserServiceService.editUser(obj);
    this.oldval = this._UserServiceService.getUserById(this.uid);
    this._router.navigateByUrl("UserList/1");
  }
}
