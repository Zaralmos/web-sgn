import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { NewsSectionComponent } from './components/news-section/news-section.component';
import { NewsItemPageComponent } from './components/news-item-page/news-item-page.component';
import { NewsSearchPageComponent } from './components/news-search-page/news-search-page.component';

@NgModule({
  declarations: [NewsItemComponent, NewsSectionComponent, NewsItemPageComponent, NewsSearchPageComponent],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }
