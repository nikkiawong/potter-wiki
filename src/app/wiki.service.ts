import { Injectable } from '@angular/core';
import { Character } from './models/character.model';
import { Movie } from './models/movie.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class WikiService {
  characters: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.characters = database.list('Characters');
  }

  getCharacters() {
    return this.characters;
  }
}
