import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}! {{hero}}</h1> <input [(ngModel)]="hero">`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
  hero:  string;
  ngOnInit(){
    this.hero = "sss";
  }
}
