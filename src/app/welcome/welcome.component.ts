import { Component, OnInit } from '@angular/core';
import { WikiService } from '../wiki.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  providers: [WikiService]
})
export class WelcomeComponent implements OnInit {
  characters: FirebaseListObservable<any[]>;
  movies: FirebaseListObservable<any[]>;

  constructor(private router: Router, private database: WikiService) { }

  ngOnInit() {
    this.characters = this.database.getCharacters();
    this.movies = this.database.getMovies();
  }

  goToCharacter(character) {
    this.router.navigate(['characters', character.$key])
  }

  goToMovie(movie) {
    this.router.navigate(['movies', movie.$key])
  }

}
