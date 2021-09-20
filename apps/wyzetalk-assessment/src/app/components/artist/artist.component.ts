import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'wyzetalk-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
})
export class ArtistComponent implements OnInit {
  private selectedId: number;

  constructor(private route: ActivatedRoute) {
    this.selectedId = 0;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.selectedId = Number(params.get('id'));
      console.log('selectedId: ', this.selectedId);
    });
  }
}
