import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistDetailsComponent } from './artist-details.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MatCardModule } from '@angular/material/card';

import { ThousandsFormatterPipe } from '../../pipes/thousands-formatter.pipe';

describe('ArtistDetailsComponent', () => {
  let component: ArtistDetailsComponent;
  let fixture: ComponentFixture<ArtistDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, MatCardModule],
      declarations: [ArtistDetailsComponent, ThousandsFormatterPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
