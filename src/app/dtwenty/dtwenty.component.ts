/**
 * dependencies
 */
import { Component, OnInit, Injector, Input } from '@angular/core';

/**
 *  define component
 */
@Component({
  selector: 'app-root',
  templateUrl: './dtwenty.component.html',
  styleUrls: [],
  providers: []
})

/**
 * "controller" for component
 */
export class DtwentyComponent implements OnInit {
  // vars
  title = 'orders';

  // constructor
  constructor(
  ) { }

  // on initialization
  ngOnInit() {
  };

}
