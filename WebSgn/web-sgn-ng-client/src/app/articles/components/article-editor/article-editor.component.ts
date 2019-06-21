import { Component, OnInit, Input } from '@angular/core';
import { Article, ArticleBlock, ArticleBlockType } from '../../models/article';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { remove } from 'src/app/shared/utils/remove';
import { BlockCreatorService } from '../../services/block-creator.service';

@Component({
  selector: 'sgn-article-editor',
  templateUrl: './article-editor.component.html',
  styleUrls: ['./article-editor.component.scss']
})
export class ArticleEditorComponent implements OnInit {

  private _articleJSON!: string;
  public get articleJSON(): string {
    return this._articleJSON;
  }
  @Input()
  public set articleJSON(value: string) {
    console.log(value);
    this._articleJSON = value;
    this.article = JSON.parse(this.articleJSON);
  }

  @Input()
  edit = false;

  public article!: Article;

  constructor(
    private readonly creator: BlockCreatorService,
  ) {
  }

  ngOnInit() {
    this.articleJSON = JSON.stringify({
      blocks: [
        {
          type: 'title',
          title: '175-ая годовщина МГТУ.',
        },
        {
          type: 'text',
          // tslint:disable-next-line: max-line-length
          text: 'Московский государственный технический университет им. Н. Э. Ба́умана (полное название Федеральное государственное бюджетное образовательное учреждение высшего образования «Московский государственный технический университет имени Н. Э. Баумана (национальный исследовательский университет)»[5], также известен как Бауманка, Бауманский, МГТУ, МВТУ) — российский национальный исследовательский университет, научный центр, особо ценный объект культурного наследия народов России[6][7][8]'
        },
        {
          type: 'image',
          link: 'http://cendop.bmstu.ru/userfiles//7.jpg',
          caption: 'Фотография главного здания МГТУ.'
        }
      ]
    } as Article);
  }

  public drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.article.blocks, event.previousIndex, event.currentIndex);

  }

  public sendUp(i: number) {
    moveItemInArray(this.article.blocks, i, i - 1);
  }

  public sendDown(i: number) {
    moveItemInArray(this.article.blocks, i, i + 1);
  }

  onDelete(block: ArticleBlock) {
    remove(this.article.blocks, block);
  }

  onAddBlock(type: ArticleBlockType) {
    const block = this.creator.create(type);
    this.article.blocks.push(block);
  }

}
