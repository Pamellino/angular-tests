import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  data = {};  
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

  setOption(option, value) {   
    console.log(option,value);   
    //this.data[option] = value;  
  }  
  
  getOption(option) {  
    return this.data[option];  
  }
}