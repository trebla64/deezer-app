import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wyzetalk-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {
  value = '';

  constructor() { }

  ngOnInit(): void {
  }

}
