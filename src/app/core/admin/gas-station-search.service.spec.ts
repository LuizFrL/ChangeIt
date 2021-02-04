import { TestBed } from '@angular/core/testing';

import { GasStationSearchService } from './gas-station-search.service';

describe('GasStationSearchService', () => {
  let service: GasStationSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GasStationSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
