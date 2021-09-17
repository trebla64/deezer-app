import { Component, OnInit } from '@angular/core';

// TODO: Move to service
interface Artist {
  name: string;
  fans: number;
}

@Component({
  selector: 'wyzetalk-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss'],
})
export class ArtistsComponent implements OnInit {
  private value: string;

  // TODO: Move to service
  artists: Artist[] = [
    { name: 'Linked Horizon', fans: 9830 },
    { name: "Link'ed", fans: 30 },
    { name: 'Linked Up 4Ever / D.R.W.P.', fans: 0 },
    { name: 'Linked Sound', fans: 0 },
  ];

  constructor() {
    this.value = '';
  }

  ngOnInit() {
    console.log('Entered artists screen');
  }
}
