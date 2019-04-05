import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleBlockTextComponent } from './article-block-text.component';

describe('ArticleBlockTextComponent', () => {
  let component: ArticleBlockTextComponent;
  let fixture: ComponentFixture<ArticleBlockTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleBlockTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleBlockTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
