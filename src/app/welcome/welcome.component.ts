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
    const url = character.$key.toLowerCase().split(" ").join('_');
    this.router.navigate(['characters', url])
  }
  
  goToMovie(movie) {
    const url = movie.$key.toLowerCase().split(" ").join('_');
    this.router.navigate(['movies', url])
  }
  public addChar = false;
  
}

