import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserListComponent } from "./user-list/user-list.component";
import {LoginPageComponent} from './login-page/login-page.component';
import { EditUserComponent } from "./edit-user/edit-user.component";
import {AuthGuardService ,AuthGuardLoginService  } from "./auth-guard.service";

//this  module is used in routing 
//the can activate is an angular guard to prevent accessing certain route under certin conditions
const routes: Routes = [
  { path: "UserList/:pnum", component: UserListComponent ,canActivate:[AuthGuardService] },
  {path: "login",component: LoginPageComponent , canActivate:[AuthGuardLoginService] },
  {path:'edit/:unum',component:EditUserComponent },
  {path:'**',component:LoginPageComponent,canActivate:[AuthGuardLoginService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
