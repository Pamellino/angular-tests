import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-choose-number',
  templateUrl: './choose-number.component.html',
  styleUrls: ['./choose-number.component.css']
})
export class ChooseNumberComponent implements OnInit {

  set progVal(value: string) {
    //console.log(value);
    if(value === null){ 
      this.dataService.setData("progVal","0");
      return;
    }
    this.dataService.setData("progVal", value.toString());
  }

  set progVal(value: string) {
    this.dataService.setData("text", value);
  }

  set text(value:string){
    this.dataService.setData("text", value);
  }

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }


}