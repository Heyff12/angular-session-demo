import { TestBed } from '@angular/core/testing';

import { ServiceBService } from './service-b.service';

describe('ServiceBService', () => {
  let service: ServiceBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
