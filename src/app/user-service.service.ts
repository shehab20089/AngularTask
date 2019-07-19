import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class UserServiceService {
  constructor() {}

  data = [
    {
      name: " ahmed",
      id: 1,
      email: "a@test.com",
      phone: 4353453543,
      Status: "”active"
    },
    {
      name: "omar",
      id: 2,
      email: "a@test.com",
      phone: 372636722,
      Status: "active"
    },
    {
      name: "ali",
      id: 3,
      email: "c@test.com",
      phone: 82736,
      Status: "soft_deleted"
    },
    {
      name: "ali",
      id: 3,
      email: "c@tessadwdat.com",
      phone: 82736,
      Status: "soft_deleted"
    },
    {
      name: "ali",
      id: 3,
      email: "c@test.com",
      phone: 82736,
      Status: "soft_deleted"
    },
    {
      name: "ali",
      id: 3,
      email: "c@test.com",
      phone: 82736,
      Status: "soft_deleted"
    },
    {
      name: "ali",
      id: 3,
      email: "c@test.com",
      phone: 82736,
      Status: "soft_deleted"
    },
    {
      name: "alli",
      id: 3,
      email: "c@test.com",
      phone: 82736,
      Status: "soft_deleted"
    },
    {
      name: "sali",
      id: 3,
      email: "c@test.com",
      phone: 82736,
      Status: "soft_deleted"
    },
    {
      name: "ali",
      id: 3,
      email: "c@test.com",
      phone: 82736,
      Status: "soft_deleted"
    }
  ];

  getAllUsersNum() {
    return this.data.length;
  }
  sortUsers(SortType) {
    console.log("insideHere");
    this.data.sort(function(a, b) {
      if (a[SortType] < b[SortType]) {
        return -1;
      }
      if (a[SortType] > b[SortType]) {
        return 1;
      }
      return 0;
    });
    return new Observable(observer => observer.next(this.data));
  }
  getUserByPage(pageNum) {
    let skipval = (pageNum - 1) * 9;

    return this.data
      .filter((x, i) => {
        if (i > skipval - 1) {
          return true;
        }
      })
      .filter((x, i) => {
        if (i <= 8) {
          return true;
        }
      });
  }
}
