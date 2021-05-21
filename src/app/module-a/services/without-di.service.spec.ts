import { TestBed } from '@angular/core/testing';

import { WithoutDIService } from './without-di.service';

describe('WithoutDIService', () => {
  let service: WithoutDIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WithoutDIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
