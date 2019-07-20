import { Component, OnInit } from "@angular/core";
import { UserServiceService } from "../user-service.service";
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { LoginServiceService } from "../login-service.service";
@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {
  constructor(
    private userService: UserServiceService,
    private Router: ActivatedRoute,
    private _LoginServic: LoginServiceService,
    private _TostarService: ToastrService
  ) {}

  data = [];
  pageNum;
  PaginationNumbers = [];
  ngOnInit() {
    this.Router.params.subscribe(params => {
      console.log(params);
      this.pageNum = params.pnum;
      console.log(this.pageNum);
      this.data = this.userService.getUserByPage(this.pageNum);
      const pagsnum = Math.ceil(this.userService.getAllUsersNum() / 9);
      this.PaginationNumbers = Array(pagsnum)
        .fill(0)
        .map((x, i) => i + 1);
    });

    console.log(this.data);
  }

  HandleAddForm() {
    var form = <HTMLInputElement>document.getElementById("frmaddId");
    form.click();
  }
  HandleAdding(e) {
    e.preventDefault();
    let obj = {
      name: e.target.querySelector("#nameInput").value,
      email: e.target.querySelector("#exampleInputEmail1").value,
      phone: e.target.querySelector("#phoneInput").value,
      id: e.target.querySelector("#idInput").value,
      Status: e.target.querySelector("#StatusSelect").value
    };
    const result = this.userService.addUser(obj);

    result.subscribe(data => {
      this.data = this.userService.getUserByPage(this.pageNum);
    });

    console.log(obj);
  }
  HandleDelete(uid) {
    this.userService.DeleteUser(uid);

    this.data = this.userService.getUserByPage(this.pageNum);
    const pagsnum = Math.ceil(this.userService.getAllUsersNum() / 9);
    this.PaginationNumbers = Array(pagsnum)
      .fill(0)
      .map((x, i) => i + 1);
  }
  HandleSort(str) {
    console.log(str);
    this.userService.sortUsers(str);
    this.data = this.userService.getUserByPage(this.pageNum);

  }
}
