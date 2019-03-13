import { TestBed } from '@angular/core/testing';

import { TruncateService } from './truncate.service';

describe('TruncateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TruncateService = TestBed.get(TruncateService);
    expect(service).toBeTruthy();
  });
});
