import { Input, Component, OnInit } from '@angular/core';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service'

@Component({
  selector: 'app-navigator-panel',
  templateUrl: './navigator-panel.component.html',
  styleUrls: ['./navigator-panel.component.css'],
  providers: [NgbProgressbarConfig] // add the NgbProgressbarConfig to the component providers
})
export class NavigatorPanelComponent implements OnInit {
  progval: number;
  config;
  S_Data: DataService;

  constructor(config: NgbProgressbarConfig,
    public dataService: DataService) {
    this.config = config;
    this.config.max = 1000;
    this.config.striped = true;
    this.config.animated = true;
    this.config.type = 'success';
    this.config.showValue = true;
    this.config.striped = true;
    this.config.height = '30px';

  }

  getProgVal() {
  }

  get data():string { 
    return this.dataService.serviceData; 
  } 
  set data(value: string) { 
    this.dataService.serviceData = value; 
  }
  ngOnInit() {
  }

}