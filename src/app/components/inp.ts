import {Component} from '@angular/core';

@Component({
  selector: 'fountain-app1',
  template: require('./inp.html')
})
export class InputComponent {
  public num: number;

  constructor() {
    this.num = 199;
  }
}
