import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayAtHotelComponent } from './pay-at-hotel.component';

describe('PayAtHotelComponent', () => {
  let component: PayAtHotelComponent;
  let fixture: ComponentFixture<PayAtHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayAtHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayAtHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
