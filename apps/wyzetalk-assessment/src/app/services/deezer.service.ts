import { Injectable } from '@angular/core';

export interface Artist {
  name: string;
  fans: number;
}

@Injectable({
  providedIn: 'root',
})
export class DeezerService {
  constructor() {}

  getArtists(artist: string): Artist[] {
    return [
      { name: 'Linked Horizon', fans: 9830 },
      { name: "Link'ed", fans: 30 },
      { name: 'Linked Up 4Ever / D.R.W.P.', fans: 0 },
      { name: 'Linked Sound', fans: 0 },
    ];
  }
}
