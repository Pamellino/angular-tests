import { Injectable } from '@angular/core';

@Injectable()
export class DataServiceService {
  private data = {};  

  constructor() { }

  setOption(option, value) {      
    this.data[option] = value;  
  }  
  
  getOption() {  
    return this.data;  
  }  

}