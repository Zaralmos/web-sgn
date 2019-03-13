import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsItemPageComponent } from './news-item-page.component';

describe('NewsItemPageComponent', () => {
  let component: NewsItemPageComponent;
  let fixture: ComponentFixture<NewsItemPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsItemPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
