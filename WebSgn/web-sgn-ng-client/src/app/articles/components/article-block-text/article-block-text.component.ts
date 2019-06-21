import { Component, OnInit, Input, ViewChild, NgZone } from '@angular/core';
import { ArticleBlock } from '../../models/article';
import { ArticleBlockText } from '../../models/article-blocks/article-block-text';
import { take } from 'rxjs/operators';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';

@Component({
  selector: 'sgn-article-block-text',
  templateUrl: './article-block-text.component.html',
  styleUrls: ['./article-block-text.component.scss']
})
export class ArticleBlockTextComponent implements OnInit {

  @Input()
  public block!: ArticleBlockText;

  @Input()
  public edit = false;

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
