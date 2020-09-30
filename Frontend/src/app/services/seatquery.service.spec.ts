import { TestBed } from '@angular/core/testing';

import { SeatqueryService } from './seatquery.service';

describe('SeatqueryService', () => {
  let service: SeatqueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeatqueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
