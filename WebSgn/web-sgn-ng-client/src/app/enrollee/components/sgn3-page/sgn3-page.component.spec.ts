import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sgn3PageComponent } from './sgn3-page.component';

describe('Sgn3PageComponent', () => {
  let component: Sgn3PageComponent;
  let fixture: ComponentFixture<Sgn3PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sgn3PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sgn3PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
