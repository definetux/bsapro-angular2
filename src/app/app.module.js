import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';

import { AppComponent } from './app.component.js';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, FormsModule ]
})
export class AppModule {}