import { Input, Component, OnInit } from '@angular/core';
import {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service'  

@Component({
  selector: 'app-navigator-panel',
  templateUrl: './navigator-panel.component.html',
  styleUrls: ['./navigator-panel.component.css'],
  providers: [NgbProgressbarConfig] // add the NgbProgressbarConfig to the component providers
})
export class NavigatorPanelComponent implements OnInit {
  progval : number;
  config;
  

  constructor(config: NgbProgressbarConfig,
              S_Data: DataService) { 
    this.config = config;
    this.config.max = 1000;
    this.config.striped = true;
    this.config.animated = true;
    this.config.type = 'success';
    this.config.showValue = true;
    this.config.striped = true;
    this.config.height = '30px';
    
  }


  getProgVal(){
  }

  message:string;


  ngOnInit() {
    this.S_Data.currentMessage.subscribe(message => this.message = message)
  }

  newMessage() {
    this.S_Data.changeMessage("Hello from Sibling")
  }

}