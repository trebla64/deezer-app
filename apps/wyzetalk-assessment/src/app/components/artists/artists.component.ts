import { Component, OnInit } from '@angular/core';
import { DeezerService, Artist } from '../../services/deezer.service';

@Component({
  selector: 'wyzetalk-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss'],
})
export class ArtistsComponent implements OnInit {
  public searchValue = '';
  public artists: Artist[] = [];

  constructor(private deezerService: DeezerService) {}

  ngOnInit() {
    console.log('Entered artists screen');
  }

  async onEnter() {
    console.log('Entered search term: ', this.searchValue);
    try {
      this.artists = await this.deezerService.getArtists(this.searchValue);
    } catch (error) {
      console.log('Error: ', error);
    }
  }
}
