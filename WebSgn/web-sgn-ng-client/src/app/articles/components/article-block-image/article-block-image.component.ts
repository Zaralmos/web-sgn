import { Component, OnInit, Input } from '@angular/core';
import { ArticleBlock } from '../../models/article';
import { ArticleBlockComponent } from '../article-block/article-block.component';

@Component({
  selector: 'sgn-article-block-image',
  templateUrl: './article-block-image.component.html',
  styleUrls: ['./article-block-image.component.scss']
})
export class ArticleBlockImageComponent implements OnInit {

  @Input()
  public block!: ArticleBlockComponent;

  @Input()
  public edit = false;

  constructor() { }

  ngOnInit() {
  }

}
