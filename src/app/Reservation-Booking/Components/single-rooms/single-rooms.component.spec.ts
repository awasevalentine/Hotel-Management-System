import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRoomsComponent } from './single-rooms.component';

describe('SingleRoomsComponent', () => {
  let component: SingleRoomsComponent;
  let fixture: ComponentFixture<SingleRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
