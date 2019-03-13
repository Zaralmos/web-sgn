import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrolleeRoutingModule } from './enrollee-routing.module';
import { CalendarPageComponent } from './components/calendar-page/calendar-page.component';
import { Sgn3PageComponent } from './components/sgn3-page/sgn3-page.component';
import { Sgn2PageComponent } from './components/sgn2-page/sgn2-page.component';
import { FaqPageComponent } from './components/faq-page/faq-page.component';

@NgModule({
  declarations: [CalendarPageComponent, Sgn3PageComponent, Sgn2PageComponent, FaqPageComponent],
  imports: [
    CommonModule,
    EnrolleeRoutingModule
  ]
})
export class EnrolleeModule { }
