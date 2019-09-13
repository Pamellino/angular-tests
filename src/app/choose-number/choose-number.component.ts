import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-choose-number',
  templateUrl: './choose-number.component.html',
  styleUrls: ['./choose-number.component.css']
})
export class ChooseNumberComponent implements OnInit {

  get data(): string {
    return this.dataService.serviceData;
  }
  set data(value: string) {
    this.dataService.serviceData = value;
  }

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }


}