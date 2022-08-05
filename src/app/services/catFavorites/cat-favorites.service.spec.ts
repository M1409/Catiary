import { TestBed } from '@angular/core/testing';

import { CatFavoritesService } from './cat-favorites.service';

describe('CatFavoritesService', () => {
  let service: CatFavoritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatFavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
