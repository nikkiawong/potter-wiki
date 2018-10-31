import {Pipe, PipeTransform} from '@angular/core';
import { WikiService } from './wiki.service';
import { Character } from './models/character.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Pipe({
  name: 'movie',
  pure: false
})

export class MoviePipe implements PipeTransform {

  transform(input: Character[], movieDesired) {
    let output: Character[] = [];
    if (movieDesired === "1") {
      // seen sorcerer's stone
      for (var i=0; i < input.length; i++) {
        if(input[i].movie === 1) {
          // push all content up to end of movie 1
          output.push(input[i]);
        }
      }
      return output;
    } else if (movieDesired === "2") {
      // seen chamber of secrets
      for (var i=0; i < input.length; i++) {
        if(input[i].movie <= 2) {
          // push all content up to end of movie 2
          output.push(input[i]);
        }
      }
      return output;
    } else if (movieDesired === "3") {
      // seen prisoner of azkaban
      for (var i=0; i < input.length; i++) {
        if (input[i].movie <= 3) {
          // push all content up to end of movie 3
          output.push(input[i]);
        }
      }
      return output;
    } else {
      // see all spoilers/deathly hallows part 2
      // push ALL instances to array
      return input;
    }
  }
}

//figure out what input[i] is exactly

// replace $key with a new property labelling movie
