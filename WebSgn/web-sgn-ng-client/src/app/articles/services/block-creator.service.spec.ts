import { TestBed } from '@angular/core/testing';

import { BlockCreatorService } from './block-creator.service';

describe('BlockCreatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlockCreatorService = TestBed.get(BlockCreatorService);
    expect(service).toBeTruthy();
  });
});
