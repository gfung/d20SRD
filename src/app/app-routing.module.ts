import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddJobComponent }  from './addJob/addJob.component';

// routes
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'scheduler/jobs', component: AddJobComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
