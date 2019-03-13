import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSearchPageComponent } from './news-search-page.component';

describe('NewsSearchPageComponent', () => {
  let component: NewsSearchPageComponent;
  let fixture: ComponentFixture<NewsSearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsSearchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
