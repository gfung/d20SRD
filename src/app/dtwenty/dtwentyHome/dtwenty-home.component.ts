/**
 * dependencies
 */
import { Component, OnInit, Injector } from '@angular/core';

// define component
@Component({
  selector: 'app-dtwenty-home',
  templateUrl: './dtwenty-home.component.html',
  styleUrls: [],
  providers: [] // [UserService]
})

/**
 * "controller" for component
 */
export class DtwentyHomeComponent implements OnInit {
  // vars

  // declare constructors
  constructor(
    // public injector: Injector
  ) { };

  // on initialization
  ngOnInit() {
  };
}
