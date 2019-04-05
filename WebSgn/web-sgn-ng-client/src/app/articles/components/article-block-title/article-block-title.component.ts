import { Component, OnInit, Input, ViewChild, NgZone } from '@angular/core';
import { ArticleBlock } from '../../models/article';
import { ArticleBlockTitle } from '../../models/article-blocks/article-block-title';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';

@Component({
  selector: 'sgn-article-block-title',
  templateUrl: './article-block-title.component.html',
  styleUrls: ['./article-block-title.component.scss']
})
export class ArticleBlockTitleComponent implements OnInit {

  @Input()
  public block!: ArticleBlockTitle;

  @ViewChild('autosize') autosize!: CdkTextareaAutosize;
  constructor(private ngZone: NgZone) { }

  ngOnInit() {
  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }
}
