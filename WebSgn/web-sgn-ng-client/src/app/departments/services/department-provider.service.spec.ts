import { TestBed } from '@angular/core/testing';

import { DepartmentProviderService } from './department-provider.service';

describe('DepartmentProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DepartmentProviderService = TestBed.get(DepartmentProviderService);
    expect(service).toBeTruthy();
  });
});
