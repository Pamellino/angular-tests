import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  message:string;
  constructor(private S_Data: DataService) { }

  ngOnInit() {
    this.S_Data.currentMessage.subscribe(message => this.message = message);
  }

}