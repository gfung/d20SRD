import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DtwentyComponent } from './dtwenty.component';
import { DtwentyHomeComponent } from './dtwentyHome/dtwenty-home.component';

// routes
const routes: Routes = [
  {
    path: 'dtwenty',
    component: DtwentyComponent,
    children: [
      {
        path: '',
        component: DtwentyHomeComponent
      },
      // {
      //   path: '*',
      //   redirectTo: '/dtwenty',
      //   pathMatch: 'full'
      // }
    ]
  },
  { path: '*', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class DtwentyRoutingModule {}
