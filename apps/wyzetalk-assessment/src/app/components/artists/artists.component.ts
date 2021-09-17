import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wyzetalk-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss'],
})
export class ArtistsComponent implements OnInit {
  private value: string;

  constructor() {
    this.value = '';
  }

  ngOnInit() {
    console.log('Entered artists screen');
  }
}
