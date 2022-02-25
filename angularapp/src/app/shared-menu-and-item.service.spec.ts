import { TestBed } from '@angular/core/testing';

import { SharedMenuAndItemService } from './shared-menu-and-item.service';

describe('SharedMenuAndItemService', () => {
  let service: SharedMenuAndItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedMenuAndItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
