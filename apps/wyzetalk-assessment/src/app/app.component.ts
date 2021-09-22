import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'wyzetalk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public searchValue = '';

  title = 'wyzetalk-assessment';

  constructor(private router: Router) {}

  async onEnter() {
    console.log('Entered search term: ', this.searchValue);
    try {
      this.router.navigate(['/artists', { search: this.searchValue }]);
    } catch (error) {
      console.log('Error: ', error);
    }
  }
}
