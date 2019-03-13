import { Component, OnInit, Input } from '@angular/core';
import { NewsItem } from 'src/app/shared/models/news-item';

@Component({
  selector: 'sgn-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {

  @Input()
  public newsItem!: NewsItem;

  constructor() { }

  ngOnInit() {
    if (!this.newsItem) {
      console.error('shit');
    }
  }

}
