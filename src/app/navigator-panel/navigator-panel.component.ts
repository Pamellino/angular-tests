import { Input, Component, OnInit } from '@angular/core';
import {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navigator-panel',
  templateUrl: './navigator-panel.component.html',
  styleUrls: ['./navigator-panel.component.css'],
  providers: [NgbProgressbarConfig] // add the NgbProgressbarConfig to the component providers
})
export class NavigatorPanelComponent implements OnInit {
  @Input() progval : number;
  config;
  

  constructor(config: NgbProgressbarConfig) { 
    this.config = config;
    this.config.max = 1000;
    this.config.striped = true;
    this.config.animated = true;
    this.config.type = 'success';
    this.config.showValue = true;
    this.config.striped = true;
    this.config.height = '30px';
  }

  ngOnInit() {
    // customize default values of progress bars used by this component tree

    
  }

}