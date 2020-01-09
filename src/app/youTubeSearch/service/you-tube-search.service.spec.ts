import { TestBed } from '@angular/core/testing';

import { YouTubeSearchService } from './you-tube-search.service';

describe('YouTubeSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YouTubeSearchService = TestBed.get(YouTubeSearchService);
    expect(service).toBeTruthy();
  });
});
