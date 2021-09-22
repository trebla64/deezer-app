import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
