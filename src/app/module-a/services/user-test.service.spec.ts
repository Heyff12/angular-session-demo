import { TestBed } from '@angular/core/testing';

import { UserTestService } from './user-test.service';

describe('UserTestService', () => {
  let service: UserTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
