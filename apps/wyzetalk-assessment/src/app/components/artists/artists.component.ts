import { Component, OnInit } from '@angular/core';
import { DeezerService, Artist } from '../../services/deezer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'wyzetalk-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss'],
})
export class ArtistsComponent implements OnInit {
  public searchValue = '';
  public artists: Artist[] = [];

  constructor(private deezerService: DeezerService, private router: Router) {}

  ngOnInit() {
    console.log('Entered artists screen');
  }

  async onEnter() {
    console.log('Entered search term: ', this.searchValue);
    try {
      this.artists = await this.deezerService.getArtists(this.searchValue);
      console.log(this.artists);
    } catch (error) {
      console.log('Error: ', error);
    }
  }

  onClickCard(id: number) {
    console.log('clicked card with id: ', id);
    this.router.navigate(['/artist', { id: id }]);
  }
}
