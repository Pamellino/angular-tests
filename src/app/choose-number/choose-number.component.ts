import {  Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-choose-number',
  templateUrl: './choose-number.component.html',
  styleUrls: ['./choose-number.component.css']
})
export class ChooseNumberComponent implements OnInit {

  progval : number;
  

  constructor(private _dataService: DataService) { 

  }

  ngOnInit() {
    this.progval=0;
  }

  setProgVal(){
      this._dataService.setOption("progval",this.progval);
  }


}