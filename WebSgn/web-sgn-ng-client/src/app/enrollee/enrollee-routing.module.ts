import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Sgn3PageComponent } from './components/sgn3-page/sgn3-page.component';
import { Sgn2PageComponent } from './components/sgn2-page/sgn2-page.component';
import { FaqPageComponent } from './components/faq-page/faq-page.component';
import { CalendarPageComponent } from './components/calendar-page/calendar-page.component';

const routes: Routes = [
  { path: 'enrollee/sgn3', component: Sgn3PageComponent },
  { path: 'enrollee/sgn2', component: Sgn2PageComponent },
  { path: 'enrollee/calendar', component: CalendarPageComponent },
  { path: 'enrollee/faq', component: FaqPageComponent },
  // { path: '', pathMatch: 'full', redirectTo: 'sgn3'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnrolleeRoutingModule { }
