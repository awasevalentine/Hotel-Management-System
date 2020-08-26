import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxuryRoomsComponent } from './luxury-rooms.component';

describe('LuxuryRoomsComponent', () => {
  let component: LuxuryRoomsComponent;
  let fixture: ComponentFixture<LuxuryRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuxuryRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuxuryRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
