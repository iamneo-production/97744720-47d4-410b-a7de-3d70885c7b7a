import { TestBed } from '@angular/core/testing';

import { SharedthemeService } from './sharedtheme.service';

describe('SharedthemeService', () => {
  let service: SharedthemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedthemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
