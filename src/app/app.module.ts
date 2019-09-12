import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigatorPanelComponent } from './navigator-panel/navigator-panel.component';
import { ChooseNumberComponent } from './choose-number/choose-number.component';
import { DataServiceService } from './data-service.service';

@NgModule({
  imports:      [ NgbModule, BrowserModule, FormsModule ],
  declarations: [ AppComponent, NavigatorPanelComponent, ChooseNumberComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DataServiceService]
})
export class AppModule { }
