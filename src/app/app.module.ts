import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import * as AuthGuardService from './auth-guard.service'
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { from } from 'rxjs';
import { EditUserComponent } from './edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    LoginPageComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthGuardService.AuthGuardLoginService,AuthGuardService.AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
