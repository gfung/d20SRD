// angular modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ngModel
import { HttpModule } from '@angular/http'; // https requests

// main component
import { DtwentyComponent } from './dtwenty.component';
import { DtwentyHomeComponent } from './dtwentyHome/dtwenty-home.component';

// inner module routing
import { DtwentyRoutingModule } from './dtwenty-routing.module';

@NgModule({
  imports: [ // list of modules from angular library
    CommonModule, // feature module import
    FormsModule, // needed for ngModel
    HttpModule, // needed for http requests
    DtwentyRoutingModule
  ],
  declarations: [DtwentyComponent, DtwentyHomeComponent], // access to components
  providers: [] // services, factories, etc.
  // bootstrap: [OrdersComponent]
})
export class DtwentyModule { }
