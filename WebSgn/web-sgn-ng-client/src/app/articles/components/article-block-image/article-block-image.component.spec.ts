import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleBlockImageComponent } from './article-block-image.component';

describe('ArticleBlockImageComponent', () => {
  let component: ArticleBlockImageComponent;
  let fixture: ComponentFixture<ArticleBlockImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleBlockImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleBlockImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
