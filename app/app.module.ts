import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import { ReleaseDetailComponent } from './release-detail.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule
 ],
  declarations: [ 
    AppComponent,
    ReleaseDetailComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
