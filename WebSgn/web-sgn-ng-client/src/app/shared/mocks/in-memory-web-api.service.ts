import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'
import { NewsItem } from '../models/news-item';

@Injectable({
  providedIn: 'root'
})
export class InMemoryWebApiService implements InMemoryDbService {

  constructor() { }

  createDb() {

    const news = [
      { id: 1, title: 'Murderes are here', departments: [], departmentsIds: [1, 2], photoUrl: 'https://images.pexels.com/photos/289237/pexels-photo-289237.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', tags: ['Абитуриенту', 'Конференции'] },
      { id: 2, title: 'Murderes are here', departments: [], departmentsIds: [1, 2], photoUrl: 'https://images.pexels.com/photos/289237/pexels-photo-289237.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', tags: ['Абитуриенту', 'Конференции'] },
      { id: 3, title: 'Murderes are here', departments: [], departmentsIds: [1, 2], photoUrl: 'https://images.pexels.com/photos/289237/pexels-photo-289237.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', tags: ['Абитуриенту', 'Конференции'] },
      { id: 4, title: 'Murderes are here', departments: [], departmentsIds: [1, 2], photoUrl: 'https://images.pexels.com/photos/289237/pexels-photo-289237.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', tags: ['Абитуриенту', 'Конференции'] },
      { id: 5, title: 'Murderes are here', departments: [], departmentsIds: [1, 2], photoUrl: 'https://images.pexels.com/photos/289237/pexels-photo-289237.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', tags: ['Абитуриенту', 'Конференции'] },
      { id: 6, title: 'Murderes are here', departments: [], departmentsIds: [1, 2], photoUrl: 'https://images.pexels.com/photos/289237/pexels-photo-289237.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', tags: ['Абитуриенту', 'Конференции'] },
      { id: 7, title: 'Murderes are here', departments: [], departmentsIds: [1, 2], photoUrl: 'https://images.pexels.com/photos/289237/pexels-photo-289237.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', tags: ['Абитуриенту', 'Конференции'] },
      { id: 8, title: 'Murderes are here', departments: [], departmentsIds: [1, 2], photoUrl: 'https://images.pexels.com/photos/289237/pexels-photo-289237.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', tags: ['Абитуриенту', 'Конференции'] }
    ];

    return {
      news,
    };

  }
}
