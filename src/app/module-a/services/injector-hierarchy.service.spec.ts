import { TestBed } from '@angular/core/testing';

import { InjectorHierarchyService } from './injector-hierarchy.service';

describe('InjectorHierarchyService', () => {
  let service: InjectorHierarchyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InjectorHierarchyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
