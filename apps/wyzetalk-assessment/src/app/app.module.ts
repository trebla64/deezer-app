import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArtistsComponent } from './components/artists/artists.component';

import { RouterModule, Routes } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ThousandsFormatterPipe } from './pipes/thousands-formatter.pipe';
import { ArtistComponent } from './components/artist-details/artist.component';

const routes: Routes = [
  { path: '', redirectTo: '/artists', pathMatch: 'full' },
  { path: 'artists', component: ArtistsComponent },
  { path: 'artist', component: ArtistComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    ThousandsFormatterPipe,
    ArtistComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    MatGridListModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
