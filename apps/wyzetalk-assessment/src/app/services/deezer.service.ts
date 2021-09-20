import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL = 'https://localhost:3333/';

export interface Artist {
  name: string;
  fans: number;
}

@Injectable({
  providedIn: 'root',
})
export class DeezerService {
  constructor(private http: HttpClient) {}

  getArtists(artist: string): Promise<Artist[]> {
    return this.http.get<Artist[]>(`${API_URL}artists?q=${artist}`).toPromise();
    // return [
    //   { name: 'Linked Horizon', fans: 9830 },
    //   { name: "Link'ed", fans: 30 },
    //   { name: 'Linked Up 4Ever / D.R.W.P.', fans: 0 },
    //   { name: 'Linked Sound', fans: 0 },
    // ];
  }
}
