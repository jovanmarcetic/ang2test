import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {HelloComponent} from './hello';
import {InputComponent} from './components/inp';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    HelloComponent,
    InputComponent
  ],
  bootstrap: [HelloComponent, InputComponent]
})
export class AppModule {}
