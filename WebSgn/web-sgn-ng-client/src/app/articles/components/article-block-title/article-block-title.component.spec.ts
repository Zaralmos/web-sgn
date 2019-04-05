import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleBlockTitleComponent } from './article-block-title.component';

describe('ArticleBlockTitleComponent', () => {
  let component: ArticleBlockTitleComponent;
  let fixture: ComponentFixture<ArticleBlockTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleBlockTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleBlockTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
