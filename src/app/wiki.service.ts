import { Injectable } from '@angular/core';
import { Character } from './models/character.model';
import { Movie } from './models/movie.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class WikiService {
  characters: FirebaseListObservable<any[]>;
  movies: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.characters = database.list('characters');
    this.characters.subscribe(res => console.log(res));
    this.movies = database.list('movies');
    this.movies.subscribe(res => console.log(res));
  }

  getCharacters() {
    return this.characters;
  }

  getMovies() {
    return this.movies;
  }

}
