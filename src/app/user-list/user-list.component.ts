import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../user-service.service';
import {ActivatedRoute   } from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserServiceService,private Router:ActivatedRoute) { }

  data = [];
  pageNum;
  PaginationNumbers=[];
  ngOnInit() {
   this.Router.params.subscribe(params=>{
     console.log(params)
     this.pageNum= params.pnum;
     console.log(this.pageNum);
     this.data= this.userService.getUserByPage(this.pageNum);
     const pagsnum= Math.ceil( this.userService.getAllUsersNum()/9)
     this.PaginationNumbers = Array(pagsnum).fill(0).map((x,i)=>i+1);

   })


   
    console.log(this.data);
  }
  HandleSort(str){
    console.log(str);
    this.userService.sortUsers(str).subscribe((testd: any)=>{
      this.data= this.userService.getUserByPage(this.pageNum);
      console.log(testd);
    });

  }
}
