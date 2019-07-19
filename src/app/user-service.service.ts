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
      Status: "active"
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
  sortedFlag = false;
  sortedVal = null;
  getAllUsersNum() {
    return this.data.length;
  }
  sortUsers(SortType) {
    this.data.sort(function(a, b) {
      if (a[SortType] < b[SortType]) {
        return -1;
      }
      if (a[SortType] > b[SortType]) {
        return 1;
      }
      return 0;
    });
    this.sortedFlag = true;
    this.sortedVal = SortType;
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
  DeleteUser(id) {
    this.data=this.data.filter(i=>{
      return i.id != id;
    })
    return new Observable(observer => observer.next(this.data)); 
  }
  addUser(newUser) {
    var didExsist: Boolean = this.data.every(i => {
      return i.id == newUser.id;
    });
    if (didExsist) {
      return new Observable(observer =>
        observer.next({ err: "This User already exist" })
      );
    } else {
      this.data.push(newUser);
      if (this.sortedFlag) {
        this.sortUsers(this.sortedVal);
      }
      return new Observable(observer => observer.next(this.data));
    }
  }
}
