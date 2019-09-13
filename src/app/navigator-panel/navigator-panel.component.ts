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
  config;

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

  get progVal():string { 
    return this.dataService.getData("progVal"); 
  } 
  set progVal(value: string) { 
    //console.log(value);
    this.dataService.setData("progVal",value); 
  }
  ngOnInit() {
  }

}