import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MatchComponent } from './match/match.component';
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    MatchComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    HttpModule
  ],
  providers: [{
    provide: 'api',
    useClass: ApiService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
