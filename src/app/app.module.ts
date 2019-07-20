import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import * as AuthGuardService from './auth-guard.service'
import { AppComponent } from './app.component';
import {ToastrModule} from 'ngx-toastr'
import { UserListComponent } from './user-list/user-list.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { LoginPageComponent } from './login-page/login-page.component';
import { from } from 'rxjs';
import { EditUserComponent } from './edit-user/edit-user.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  //import all components
  declarations: [
    AppComponent,
    UserListComponent,
    LoginPageComponent,
    EditUserComponent,
    NavComponent
  ],
  imports: [
    //import the modules that is need in our application like routing module
    //the translate module is used to implement the localization
    BrowserModule,HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
    AppRoutingModule,
    //tostar module is used to impelement tostar notifications
    ToastrModule.forRoot()
  ],
  //i used several angular guards to protect certien routes from un wanted access
  providers: [AuthGuardService.AuthGuardLoginService,AuthGuardService.AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
