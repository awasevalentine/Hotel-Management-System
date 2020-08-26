import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRoomsFormComponent } from './single-rooms-form.component';

describe('SingleRoomsFormComponent', () => {
  let component: SingleRoomsFormComponent;
  let fixture: ComponentFixture<SingleRoomsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleRoomsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleRoomsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
