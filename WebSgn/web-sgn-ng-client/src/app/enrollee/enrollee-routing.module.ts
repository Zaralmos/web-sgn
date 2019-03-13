import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Sgn3PageComponent } from './components/sgn3-page/sgn3-page.component';
import { Sgn2PageComponent } from './components/sgn2-page/sgn2-page.component';

const routes: Routes = [
  { path: 'sgn3', component: Sgn3PageComponent },
  { path: 'sgn2', component: Sgn2PageComponent },
  { path: '', pathMatch: 'full', redirectTo: 'sgn3'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnrolleeRoutingModule { }
