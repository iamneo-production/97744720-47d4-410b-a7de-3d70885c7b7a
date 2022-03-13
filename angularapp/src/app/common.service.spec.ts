import { TestBed } from '@angular/core/testing';

import { AddmenuService } from './common.service';

describe('AddmenuService', () => {
  let service: AddmenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddmenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
