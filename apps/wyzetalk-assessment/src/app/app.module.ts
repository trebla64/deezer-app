import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArtistsComponent } from './components/artists/artists.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/artists', pathMatch: 'full' },
  { path: 'artists', component: ArtistsComponent }
];

@NgModule({
  declarations: [AppComponent, ArtistsComponent],
  imports: [BrowserModule, BrowserAnimationsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
