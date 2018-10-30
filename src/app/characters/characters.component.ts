import { Component, OnInit } from '@angular/core';
import { WikiService } from '../wiki.service';
import { FirebaseListObservable } from 'angularfire2/database';

import { Character } from '../models/character.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  providers: [WikiService]
})
export class CharactersComponent implements OnInit {

  characters: FirebaseListObservable<any[]>;

  constructor(private database: WikiService) { }

  ngOnInit() {
    this.characters = this.database.getCharacters();
    this.characters.subscribe(res => console.log(res));
  }
}
