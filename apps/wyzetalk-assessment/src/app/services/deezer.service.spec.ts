import { TestBed } from '@angular/core/testing';

import { Album, Artist, DeezerService } from './deezer.service';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('DeezerService', () => {
  let service: DeezerService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(DeezerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getArtists should make a `GET` request', () => {
    // Setup
    const artists: Artist[] = [
      {
        id: 1,
        name: 'Test Artist #1',
        img: 'test1.jpg',
        fans: 1000,
      },
      {
        id: 2,
        name: 'Test Artist #2',
        img: 'test2.jpg',
        fans: 2000,
      },
    ];

    // Actual test
    service.getArtists('test').then((resp) => {
      expect(resp).toEqual(artists);
    });

    const req = httpTestingController.expectOne(
      service.API_URL + '/artists?q=test'
    );
    expect(req.request.method).toEqual('GET');

    req.flush(artists);
  });

  it('#getAlbums should make a `GET` request', () => {
    // Setup
    const albums: Album[] = [
      {
        id: 1,
        name: 'Test Album #1',
        img: 'test1.jpg',
        fans: 1000,
        release_date: '2021-09-27',
      },
      {
        id: 2,
        name: 'Test Album #2',
        img: 'test2.jpg',
        fans: 2000,
        release_date: '2020-09-27',
      },
    ];

    // Actual test
    const artistId = 13;
    service.getAlbums(artistId).then((resp) => {
      expect(resp).toEqual(albums);
    });

    const req = httpTestingController.expectOne(
      `${service.API_URL}/artist/${artistId}/albums`
    );
    expect(req.request.method).toEqual('GET');

    req.flush(albums);
  });
});
