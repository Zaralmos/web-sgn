import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sgn2PageComponent } from './sgn2-page.component';

describe('Sgn2PageComponent', () => {
  let component: Sgn2PageComponent;
  let fixture: ComponentFixture<Sgn2PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sgn2PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sgn2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
