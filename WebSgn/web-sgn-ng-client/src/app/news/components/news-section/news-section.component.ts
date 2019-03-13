import { Component, OnInit, Input } from '@angular/core';
import { NewsProviderService } from '../../services/news-provider.service';
import { NewsSearchParams } from 'src/app/shared/models/news-search-params';
import { NewsItem } from 'src/app/shared/models/news-item';

@Component({
  selector: 'sgn-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.scss']
})
export class NewsSectionComponent implements OnInit {

  @Input()
  public params?: NewsSearchParams;

  public news!: NewsItem[];

  constructor(
    private readonly provider: NewsProviderService
  ) { }

  async ngOnInit() {
    this.news = await this.provider.search(this.params);
  }

}
