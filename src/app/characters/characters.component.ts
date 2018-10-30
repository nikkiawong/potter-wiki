import { Component, OnInit } from '@angular/core';
import { WikiService } from '../wiki.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Character } from '../models/character.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  providers: [WikiService]
})
export class CharactersComponent implements OnInit {

  characters: FirebaseListObservable<any[]>;

  constructor(private route: ActivatedRoute, private location: Location, private database: WikiService) { }
  characterKey: string;
  characterToShow;

  ngOnInit() {
    this.characters = this.database.getCharacters();

    this.characters.subscribe(res => console.log(res));

    this.route.params.forEach((urlParameters) => {
      this.characterKey = urlParameters['$key'];
    });
    this.database.getCharacterByKey(this.characterKey).subscribe(dataIn => {
     this.characterToShow = dataIn;
     console.log(this.characterToShow);
   })

  }
}
