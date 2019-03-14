import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NewsModule } from '../news/news.module';
import { MaterialImportsModule } from '../material-imports/material-imports.module';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    CoreModule,
    MaterialImportsModule,
    NewsModule,
    HomeRoutingModule,
  ],
  exports: [HomePageComponent]
})
export class HomeModule { }
