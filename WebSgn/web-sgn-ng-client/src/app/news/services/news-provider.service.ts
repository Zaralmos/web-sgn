import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { NewsItem } from 'src/app/shared/models/news-item';
import { NewsSearchParams } from 'src/app/shared/models/news-search-params';

@Injectable({
  providedIn: 'root'
})
export class NewsProviderService {

  constructor(
    private readonly http: HttpService
  ) { }

  public search(params?: NewsSearchParams) {
    // TODO: POST params in body
    return this.http.get<NewsItem[]>('/api/news');
  }

  public get(id: number) {
    return this.http.get<NewsItem>(`/api/news/${id}`);
  }

  public add(newsItem: NewsItem) {
    return this.http.post<number>(`/api/news/`, newsItem);
  }

  public update(newsItem: NewsItem) {
    return this.http.put<number>(`/api/news/`, newsItem);
  }

  public delete(id: number) {
    return this.http.delete<number>(`/api/news/${id}`);
  }

}
