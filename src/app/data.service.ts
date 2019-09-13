import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  serviceData: string;
  _data:{};
  getData(key : string):string {
    if (typeof this._data[key] === 'undefined'){
      return null;
    } 
    return this._data[key];
  };
  setData(key : string, value: string) {
    this._data[key];
  };
  
  constructor() {
  }
}