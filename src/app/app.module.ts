import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavigatorPanelComponent } from './navigator-panel/navigator-panel.component';

@NgModule({
  imports:      [ NgbModule, BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, NavigatorPanelComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
