import { TestBed } from '@angular/core/testing';

import { MaintenancesService } from './maintenances.service';

describe('ProductsService', () => {
  let service: MaintenancesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaintenancesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
