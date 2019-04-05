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
  editingEnabled = false;

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
          title: 'ss',
        },
        {
          type: 'title',
          title: 'A ds',
        },
        {
          type: 'title',
          title: 'Заголовок',
        },
        {
          type: 'title',
          title: ' SADA SDSA D SDAS ASDSA DA SD AS D',
        },
        {
          type: 'title',
          title: '12312321312',
        },
        {
          type: 'text',
          // tslint:disable-next-line: max-line-length
          text: '«Покровские ворота» — советский двухсерийный художественный телефильм,  на съёмки, '
        },
        {
          type: 'text',
          // tslint:disable-next-line: max-line-length
          text: '«Покровские ворота» — , снятый Михаилом Козаковым в 1982 году. Драматургической основой для картины послужила одноимённая пьеса Леонида Зорина, повествующая о событиях, которые происходили во второй половине 1950-х годов с жителями коммунальной квартиры у Покровских ворот. В фильме снимались Олег Меньшиков, Леонид Броневой, Анатолий Равикович, Инна Ульянова, Виктор Борцов и другие. Павильонные съёмки проходили на киностудии «Мосфильм», натурные — на улицах и бульварах столицы. Запуск «Покровских ворот» в производство, а также сдача готовой картины сопровождались определёнными сложностями; чтобы получить разрешение на съёмки, '
        },
        {
          type: 'text',
          // tslint:disable-next-line: max-line-length
          text: '«Покровские ворота» — советский двухсерийный художественный телефильм, снятый Михаилом  основой для картины послужила одноимённая пьеса Леонида Зорина, повествующая о событиях, которые происходили во второй половине 1950-х годов с жителями коммунальной квартиры у Покровских ворот. В фильме снимались Олег Меньшиков, Леонид Броневой, Анатолий Равикович, Инна Ульянова, Виктор Борцов и другие. Павильонные съёмки проходили на киностудии «Мосфильм», натурные — на улицах и бульварах столицы. Запуск «Покровских ворот» в производство, а также сдача готовой картины сопровождались определёнными сложностями; чтобы получить разрешение на съёмки, '
        },
        {
          type: 'image',
          link: 'https://photogallery.indiatimes.com/photo/67833521.cms',
          caption: 'Something'
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
    this.article.blocks.push({ type });
  }

}
