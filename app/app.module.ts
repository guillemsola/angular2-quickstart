import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }   from './app.component';
import { ReleaseDetailComponent } from './release-detail.component';
import { ReleasesComponent } from './releases.component';
import { ReleaseService} from './release.service';
import { DashboardComponent } from './dashboard.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule
 ],
  declarations: [ 
    AppComponent,
    DashboardComponent,
    ReleaseDetailComponent,
    ReleasesComponent
  ],
  providers: [
    ReleaseService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
