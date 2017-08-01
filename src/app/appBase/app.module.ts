import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// app base
import { AppComponent } from './app.component';
// home component
import { HomeComponent } from '../home/home.component';
// feature modules
import { DtwentyModule } from '../dtwenty/dtwenty.module';


@NgModule({
  declarations: [ // access to components
    AppComponent,
    HomeComponent
  ],
  imports: [ // list of modules
    BrowserModule,
    AppRoutingModule,
    DtwentyModule
  ],
  providers: [], // services, factories, etc.
  bootstrap: [AppComponent]
})
export class AppModule { }
