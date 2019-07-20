import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

// translate is used to add the localization to change the language 
  constructor(public translate: TranslateService ) {

    translate.setDefaultLang('en');
  }
  // this will change the language using the translate
  ChangeLang(lang){
    this.translate.use(lang)
  }
  
  title = 'user-mangement-system';
}
