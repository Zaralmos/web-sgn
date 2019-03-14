import { Component, OnInit } from '@angular/core';
import { NewsProviderService } from 'src/app/news/services/news-provider.service';
import { NewsItem } from 'src/app/shared/models/news-item';

@Component({
  selector: 'sgn-news-dropdown',
  templateUrl: './news-dropdown.component.html',
  styleUrls: ['./news-dropdown.component.scss']
})
export class NewsDropdownComponent implements OnInit {

  public news: NewsItem[] = [];

  constructor(
    public readonly provider: NewsProviderService
  ) { }

  async ngOnInit() {
    this.news = (await this.provider.search({ take: 2 })).slice(0, 2);
  }

}
