import { TestBed } from '@angular/core/testing';

import { NewsProviderService } from './news-provider.service';

describe('NewsProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsProviderService = TestBed.get(NewsProviderService);
    expect(service).toBeTruthy();
  });
});
