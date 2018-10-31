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

  getMovieByKey(movieKey: string) {
    const keyArray = movieKey.split('_');
    for (let i = 0; i < keyArray.length; i++) {
      if (keyArray[i] == 'and' || keyArray[i] == 'the' || keyArray[i] == 'of') {
        keyArray[i] = keyArray[i];
      } else {
        keyArray[i] = keyArray[i][0].toUpperCase() + keyArray[i].substr(1);
      }
    }
    const key = keyArray.join(' ');
    return this.database.object('movies/' + key);
  }

  getCharacterByKey(characterKey: string) {
    const keyArray = characterKey.split('_');
    for (let i = 0; i < keyArray.length; i++) {
      if (keyArray[i] == 'and' || keyArray[i] == 'the' || keyArray[i] == 'of') {
        keyArray[i] = keyArray[i];
      } else {
        keyArray[i] = keyArray[i][0].toUpperCase() + keyArray[i].substr(1);
      }
    }
    const key = keyArray.join(' ');
    return this.database.object('characters/' + key);
  }

  getCharMovieById(characterKey: string, charMovieId: string) {
    const keyArray = characterKey.split('_');
    for (let i = 0; i < keyArray.length; i++) {
      if (keyArray[i] == 'and' || keyArray[i] == 'the' || keyArray[i] == 'of') {
        keyArray[i] = keyArray[i];
      } else {
        keyArray[i] = keyArray[i][0].toUpperCase() + keyArray[i].substr(1);
      }
    }
    const key = keyArray.join(' ');
    console.log('characters/' + key + '/' + 'charMovies/' + charMovieId);
    return this.database.object('/characters/' + key + '/charMovies/' + charMovieId);
  }

  getCharacters() {
    return this.characters;
  }

  getMovies() {
    return this.movies;
  }
  addCharacter(newCharacter: Character) {
    // this.characters.push(newCharacter);
  this.database.object(`/characters/${newCharacter.name}/charMovies/${newCharacter.movie}/`).set(newCharacter);
  }

}
