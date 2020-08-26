import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniLuxuryRoomsFormComponent } from './mini-luxury-rooms-form.component';

describe('MiniLuxuryRoomsFormComponent', () => {
  let component: MiniLuxuryRoomsFormComponent;
  let fixture: ComponentFixture<MiniLuxuryRoomsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniLuxuryRoomsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniLuxuryRoomsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
