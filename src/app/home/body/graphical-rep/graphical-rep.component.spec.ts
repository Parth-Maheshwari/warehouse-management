import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicalRepComponent } from './graphical-rep.component';

describe('GraphicalRepComponent', () => {
  let component: GraphicalRepComponent;
  let fixture: ComponentFixture<GraphicalRepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicalRepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicalRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
