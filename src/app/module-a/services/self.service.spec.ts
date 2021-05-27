import { TestBed } from '@angular/core/testing';

import { SelfService } from './self.service';

describe('SelfService', () => {
  let service: SelfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
