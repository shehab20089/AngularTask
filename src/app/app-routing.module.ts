import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserListComponent } from "./user-list/user-list.component";
import {LoginPageComponent} from './login-page/login-page.component'

const routes: Routes = [
  { path: "UserList/:pnum", component: UserListComponent },
  {path: "**",component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
