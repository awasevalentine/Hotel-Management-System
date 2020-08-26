import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceRoomsFormComponent } from './conference-rooms-form.component';

describe('ConferenceRoomsFormComponent', () => {
  let component: ConferenceRoomsFormComponent;
  let fixture: ComponentFixture<ConferenceRoomsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferenceRoomsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceRoomsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
