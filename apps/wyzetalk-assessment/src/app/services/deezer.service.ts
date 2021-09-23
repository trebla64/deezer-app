import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// TODO: This should be moved to environment file
const API_URL = 'http://localhost:3333';

export interface Artist {
  id: number;
  name: string;
  img: string;
  fans: number;
}

export interface Album {
  id: number;
  name: string;
  img: string;
  fans: number;
  release_date: string;
}

export interface Track {
  id: number;
  name: string;
  duration: number;
}

@Injectable({
  providedIn: 'root',
})
export class DeezerService {
  constructor(private http: HttpClient) {}

  getArtists(artist: string): Promise<Artist[]> {
    return this.http
      .get<Artist[]>(`${API_URL}/artists?q=${artist}`)
      .toPromise();
  }

  getAlbums(artist_id: number): Promise<Album[]> {
    return this.http
      .get<Album[]>(`${API_URL}/artist/${artist_id}/albums`)
      .toPromise();
  }

  getTop5(artist_id: number): Promise<Track[]> {
    return this.http
      .get<Track[]>(`${API_URL}/artist/${artist_id}/top5`)
      .toPromise();
  }
}
