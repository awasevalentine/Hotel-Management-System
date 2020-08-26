import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniLuxuryRoomsComponent } from './mini-luxury-rooms.component';

describe('MiniLuxuryRoomsComponent', () => {
  let component: MiniLuxuryRoomsComponent;
  let fixture: ComponentFixture<MiniLuxuryRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniLuxuryRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniLuxuryRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
