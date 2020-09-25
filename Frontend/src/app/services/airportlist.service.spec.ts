import { TestBed } from '@angular/core/testing';

import { AirportlistService } from './airportlist.service';

describe('AirportlistService', () => {
  let service: AirportlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirportlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
