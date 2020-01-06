import { TestBed } from '@angular/core/testing';

import { LetterStorageService } from './letter-storage.service';

describe('LetterStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LetterStorageService = TestBed.get(LetterStorageService);
    expect(service).toBeTruthy();
  });
});
