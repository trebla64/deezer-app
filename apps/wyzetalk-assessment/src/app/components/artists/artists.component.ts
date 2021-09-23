import { Component, OnInit } from '@angular/core';
import { DeezerService, Artist } from '../../services/deezer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wyzetalk-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss'],
})
export class ArtistsComponent implements OnInit {
  public artists: Artist[] = [];
  private search = '';
  private sub: any;

  constructor(
    private deezerService: DeezerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log('Entered artists screen');
    this.sub = this.route.params.subscribe((params) => {
      // Don't load artists when search is undefined
      const searchTerm = params['search'];
      if (searchTerm) {
        this.loadArtists(params['search']);
      }
    });
  }

  async loadArtists(search: string) {
    console.log('loadArtists:');
    this.artists = await this.deezerService.getArtists(search);
    console.log(this.artists);
  }

  onClickCard(id: number) {
    console.log('clicked card with id: ', id);
    this.router.navigate(['/artist', { id: id }]);
  }
}
