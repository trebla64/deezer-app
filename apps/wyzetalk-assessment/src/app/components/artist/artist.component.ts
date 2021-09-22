import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album, DeezerService } from '../../services/deezer.service';

@Component({
  selector: 'wyzetalk-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
})
export class ArtistComponent implements OnInit {
  private selectedId: number;
  public albums: Album[] = [];

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
}
