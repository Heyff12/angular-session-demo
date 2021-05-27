import { TestBed } from '@angular/core/testing';

import { OptionalService } from './optional.service';

describe('OptionalService', () => {
  let service: OptionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OptionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
