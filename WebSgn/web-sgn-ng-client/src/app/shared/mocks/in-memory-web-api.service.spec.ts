import { TestBed } from '@angular/core/testing';

import { InMemoryWebApiService } from './in-memory-web-api.service';

describe('InMemoryWebApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemoryWebApiService = TestBed.get(InMemoryWebApiService);
    expect(service).toBeTruthy();
  });
});
