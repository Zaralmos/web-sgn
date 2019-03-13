import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '../home/components/home-page/home-page.component';

const routes: Routes = [
  { path: 'enrollee', loadChildren: './../enrollee/enrollee.module#EnrolleeModule' },
  // { path: 'news', loadChildren: './../enrollee/enrollee.module#EnrolleeModule' },
  { path: '', component: HomePageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
