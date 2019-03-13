import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class InMemoryWebApiService implements InMemoryDbService {

  constructor() { }

  createDb() {

    const news = [
      { id: 1, title: 'Murderes are here' },
      { id: 2, title: 'Murderes are here' },
      { id: 3, title: 'Murderes are here' },
      { id: 4, title: 'Murderes are here' }
    ];

    return {
      news,
    };

  }
}
