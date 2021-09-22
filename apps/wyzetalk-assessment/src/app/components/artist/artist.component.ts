import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album, Track, DeezerService } from '../../services/deezer.service';

@Component({
  selector: 'wyzetalk-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
})
export class ArtistComponent implements OnInit {
  private selectedId: number;
  public albums: Album[] = [];
  public top5Tracks: Track[] = [];

  constructor(
    private route: ActivatedRoute,
    private deezerService: DeezerService
  ) {
    this.selectedId = 0;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.selectedId = Number(params.get('id'));
      console.log('selectedId: ', this.selectedId);
      this.refreshAlbums();
      this.refreshTop5();
    });
  }

  async refreshAlbums() {
    try {
      this.albums = await this.deezerService.getAlbums(this.selectedId);
      console.log('albums: ', this.albums);
    } catch (error) {
      console.log('Error: ', error);
    }
  }

  async refreshTop5() {
    try {
      this.top5Tracks = await this.deezerService.getTop5(this.selectedId);
      console.log('tracks: ', this.top5Tracks);
    } catch (error) {
      console.log('Error: ', error);
    }
  }
}
