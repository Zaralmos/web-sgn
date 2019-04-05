import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NewsModule } from '../news/news.module';
import { MaterialImportsModule } from '../material-imports/material-imports.module';
import { CoreModule } from '../core/core.module';
import { ArticlesModule } from '../articles/articles.module';


@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    CoreModule,
    MaterialImportsModule,
    NewsModule,
    HomeRoutingModule,
    ArticlesModule
  ],
  exports: [HomePageComponent]
})
export class HomeModule { }
