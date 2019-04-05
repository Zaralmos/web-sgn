import { Injectable } from '@angular/core';
import { ArticleBlockType, ArticleBlock } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class BlockCreatorService {

  constructor() { }

  public create(type: ArticleBlockType): ArticleBlock {
    switch (type) {
      case 'title':
        return {
          type,
          title: '',
        };
      case 'text':
        return {
          type,
          text: '',
        };
      case 'image':
        return {
          type,
          link: '',
          caption: '',
        };
    }
  }
}
