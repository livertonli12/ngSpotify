import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "app/services/spotify.service";
import { Artist } from "app/models/Artist";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SpotifyService]
})
export class SearchComponent implements OnInit {
  searchStr:string;
  searchRes: Artist[];

  constructor(private _spotifyService:SpotifyService) { }

  ngOnInit() {
  }

  searchMusic() {
    this._spotifyService.searchMusic(this.searchStr)
        .subscribe(res => {
          this.searchRes = res.artists.items;
        });
  }

}