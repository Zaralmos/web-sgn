import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NewsModule } from '../news/news.module';


@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    NewsModule,
    HomeRoutingModule,
  ],
  exports: [HomePageComponent]
})
export class HomeModule { }
