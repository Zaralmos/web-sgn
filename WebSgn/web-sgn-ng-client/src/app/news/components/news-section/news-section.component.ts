import { Component, OnInit } from '@angular/core';
import { NewsProviderService } from '../../services/news-provider.service';

@Component({
  selector: 'sgn-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.scss']
})
export class NewsSectionComponent implements OnInit {

  constructor(
    provider: NewsProviderService
  ) { }

  ngOnInit() {
  }

}
