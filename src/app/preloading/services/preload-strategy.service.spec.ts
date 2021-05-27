import { TestBed } from '@angular/core/testing';

import { PreloadStrategyService } from './preload-strategy.service';

describe('PreloadStrategyService', () => {
  let service: PreloadStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreloadStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
