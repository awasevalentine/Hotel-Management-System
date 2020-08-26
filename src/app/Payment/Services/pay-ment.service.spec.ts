import { TestBed } from '@angular/core/testing';

import { PayMentService } from './pay-ment.service';

describe('PayMentService', () => {
  let service: PayMentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayMentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
