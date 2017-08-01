import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';

// routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'orders', redirectTo: 'order', pathMatch: 'full' },
  { path: '*', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
