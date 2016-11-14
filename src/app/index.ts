import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {HelloComponent} from './hello';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    HelloComponent
  ],
  bootstrap: [HelloComponent]
})
export class AppModule {}
