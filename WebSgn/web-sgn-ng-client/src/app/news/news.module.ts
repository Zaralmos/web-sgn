import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsItemComponent } from './components/news-item/news-item.component';
import { NewsSectionComponent } from './components/news-section/news-section.component';
import { NewsItemPageComponent } from './components/news-item-page/news-item-page.component';
import { NewsSearchPageComponent } from './components/news-search-page/news-search-page.component';
import { NewsProviderService } from './services/news-provider.service';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [NewsItemComponent, NewsSectionComponent, NewsItemPageComponent, NewsSearchPageComponent],
  imports: [
    CommonModule,
    CoreModule,
  ],
  exports: [NewsItemComponent, NewsSectionComponent],
  providers: [NewsProviderService]
})
export class NewsModule { }
