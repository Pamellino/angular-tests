import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  data = {};  
  
  constructor() { }

  setOption(option, value) {   
    console.log(option,value);   
    this.data[option] = value;  
  }  
  
  getOption(option) {  
    return this.data[option];  
  }
}