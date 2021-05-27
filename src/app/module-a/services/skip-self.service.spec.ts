import { TestBed } from '@angular/core/testing';

import { SkipSelfService } from './skip-self.service';

describe('SkipSelfService', () => {
  let service: SkipSelfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkipSelfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
