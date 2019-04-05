import { Component, OnInit, Input } from '@angular/core';
import { ArticleBlock } from '../../models/article';

@Component({
  selector: 'sgn-article-block',
  templateUrl: './article-block.component.html',
  styleUrls: ['./article-block.component.scss']
})
export class ArticleBlockComponent implements OnInit {

  @Input()
  public block!: ArticleBlock;

  @Input()
  public editingEnabled = false;

  constructor() { }

  ngOnInit() { }

}
