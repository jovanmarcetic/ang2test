import {Component} from '@angular/core';

@Component({
  selector: 'fountain-app',
  template: require('./hello.html')
})
export class HelloComponent {
  public word: string;
  public num: number;

  constructor() {
    this.word = 'cao!';
    this.num = 9;
  }
}
