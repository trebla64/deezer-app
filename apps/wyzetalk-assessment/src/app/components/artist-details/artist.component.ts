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
  public artistImg = '';
  public fans = 0;
  public artistName = '';
  public albums: Album[] = [];
  public top5Tracks: Track[] = [];
  public loadingTracks = false;
  public loadingAlbums = false;

  constructor(
    private route: ActivatedRoute,
    private deezerService: DeezerService
  ) {
    this.selectedId = 0;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.selectedId = Number(params.get('id'));
      this.artistImg = String(params.get('img'));
      this.fans = Number(params.get('fans'));
      this.artistName = String(params.get('name'));
      console.log('selectedId: ', this.selectedId);
      console.log('artistImg: ', this.artistImg);
      console.log('fans: ', this.fans);
      console.log('Name: ', this.artistName);
      this.refreshAlbums();
      this.refreshTop5();
    });
  }

  async refreshAlbums() {
    try {
      this.loadingAlbums = true;
      this.albums = await this.deezerService.getAlbums(this.selectedId);
      this.loadingAlbums = false;
      console.log('albums: ', this.albums);
      // Sort albums by release date (newest first)
      this.albums = this.albums.sort((n1, n2) => {
        if (n1.release_date < n2.release_date) {
          return 1;
        }

        if (n1.release_date > n2.release_date) {
          return -1;
        }

        return 0;
      });
    } catch (error) {
      this.loadingAlbums = false;
      console.log('Error: ', error);
    }
  }

  async refreshTop5() {
    try {
      this.loadingTracks = true;
      this.top5Tracks = await this.deezerService.getTop5(this.selectedId);
      this.loadingTracks = false;
      console.log('tracks: ', this.top5Tracks);
    } catch (error) {
      this.loadingTracks = false;
      console.log('Error: ', error);
    }
  }
}
