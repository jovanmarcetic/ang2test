import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {HelloComponent} from './hello';
// import {NgbdButtonsRadio} from './inp';

@NgModule({
// imports: [BrowserModule, NgbModule.forRoot()],
  imports: [BrowserModule],
  declarations: [HelloComponent],
  bootstrap: [HelloComponent]
})
export class AppModule {}
