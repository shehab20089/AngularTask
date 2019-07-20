import { Injectable } from "@angular/core";
import { ToastrService } from 'ngx-toastr';
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class UserServiceService {
  constructor(private tostarService:ToastrService) {}

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

    this.data = this.data.filter(i => {
      return i.id != id;
    });
    this.tostarService.success('Thank you ','user Deleted successfully');

    
  }
  getUserById(uid) {
     var exist=this.data.filter(i=>{
      return i.id==uid;
    })
    if(exist.length>0)
    return exist[0];
    else 
    this.tostarService.error('',`user with this id ${uid} doesnt exist`);

    return;
  }
editUser(uobj)
{

  this.data=this.data.filter(i=>{
    return i.id != uobj['id'];
  })
  
  console.log(this.data)
this.data.push(uobj);
if (this.sortedFlag) {
  this.sortUsers(this.sortedVal);
}
this.tostarService.success('Thank you ','user was updateted successfully');



}
  addUser(newUser) {
        var didExsist: Boolean = this.data.every(i => {
      return i.id != newUser.id;
    });
    console.log(didExsist)
    if (!didExsist) {
      this.tostarService.error('Sorry ','user with this id already exists');
return;
    } else {
      this.data.push(newUser);
      this.tostarService.success('Thank you ','user added successfully');

      if (this.sortedFlag) {
        this.sortUsers(this.sortedVal);
      }
      return new Observable(observer => observer.next(this.data));
    }
  }
}
