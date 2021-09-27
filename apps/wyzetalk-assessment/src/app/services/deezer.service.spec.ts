import { TestBed } from '@angular/core/testing';

import { DeezerService } from './deezer.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DeezerService', () => {
  let service: DeezerService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
    service = TestBed.inject(DeezerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
