// base modules
import { NgModule }      from '@angular/core'; // core
import { BrowserModule } from '@angular/platform-browser'; // hot reload
import { FormsModule }   from '@angular/forms'; // ngModel
import { HttpModule }    from '@angular/http'; // https requests

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

// routes file
import { AppRoutingModule }  from './app-routing.module';

// modules to load
import { AppComponent }  from './main/app.component';
import { HeaderNavComponent }  from './headerNav/header.component';
import { LeftNavComponent }  from './leftNav/leftnav.component';
import { AddJobComponent }  from './addJob/addJob.component';

import { UserService }  from './services/user.services';

@NgModule({
  imports: [ // list of modules from angular library
    BrowserModule, // hot reload for dev
    FormsModule, // needed for ngModel
    HttpModule, // needed for http requests
    InMemoryWebApiModule.forRoot(InMemoryDataService), // temporary in memory backend service
    AppRoutingModule // import routes
  ],
  declarations: [ AppComponent, HeaderNavComponent, LeftNavComponent, AddJobComponent], // access to components
  providers: [ UserService ], // services, factories, etc.
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
