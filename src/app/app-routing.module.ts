import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [ 
  { path: 'UserList/:pnum', component: UserListComponent },
  {
    path: '',
    component: UserListComponent,
    data: { pnum:1}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
