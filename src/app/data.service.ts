import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  serviceData: string;
  private _data;
  getData(key: string): string {
    if (typeof this._data[key] === 'undefined') {
      return null;
    }
    return this._data[key];
  };
  setData(key: string, value: string) {
    //if (this._data[key] !== value) {
    //  console.log(key, value);
       this._data[key] = value;
    //}
  };

  constructor() {
    this._data = {};
  }
}