import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxuryRoomsFormComponent } from './luxury-rooms-form.component';

describe('LuxuryRoomsFormComponent', () => {
  let component: LuxuryRoomsFormComponent;
  let fixture: ComponentFixture<LuxuryRoomsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuxuryRoomsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuxuryRoomsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
