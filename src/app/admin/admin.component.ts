import { Component, OnInit } from '@angular/core';
// import { Character } from '../models/character.model';
import { WikiService } from '../wiki.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
// import { Location } from '@angular/common';
// import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [WikiService]
})

export class AdminComponent implements OnInit {
  characters: FirebaseListObservable<any[]>;
  movies: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  // characterToShow;

  constructor(private router: Router, private database: WikiService) { }
  // characterKey: string;
  // characterToShow;

  public show:boolean = false;

  ngOnInit() {
    this.characters = this.database.getCharacters();
    this.movies = this.database.getMovies();
    this.characters.subscribe(res => console.log(res[0]));
    // this.characters.subscribe(res => console.log(res));

    this.show = false;
  }

  toggle() {
   this.show = !this.show;
  }
  // this.charMovieId = '1';
  //
  // this.wikiService.getCharMovieById(this.characterKey, this.charMovieId).subscribe(dataLastEmittedFromObserver => {
  //   console.log(dataLastEmittedFromObserver);
  //   this.charMovieToDisplay = new Character(dataLastEmittedFromObserver.name, dataLastEmittedFromObserver.birthdate, dataLastEmittedFromObserver.firstAppearance, dataLastEmittedFromObserver.lastAppearance, dataLastEmittedFromObserver.portrayedBy, dataLastEmittedFromObserver.house, dataLastEmittedFromObserver.family, dataLastEmittedFromObserver.loveInterest, dataLastEmittedFromObserver.movie, dataLastEmittedFromObserver.movieSpecificSummary, dataLastEmittedFromObserver.movieSpecificSpoilerSummary,
  //   dataLastEmittedFromObserver.photo);
  //
  //   console.log(this.charMovieToDisplay);
  // })

}
