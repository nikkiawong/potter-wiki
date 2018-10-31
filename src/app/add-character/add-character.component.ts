import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WikiService } from '../wiki.service';
import { Character } from '../models/character.model';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.scss'],
  providers: [WikiService]
})
export class AddCharacterComponent implements OnInit {
// @Output() sendCharacter = new EventEmitter();

submitForm(characterName: string, characterBirthdate: string, characterFirstAppearance: string, characterLastAppearance: string, characterPortrayedBy: string, characterHouse: string, characterFamily: string[], characterLoveInterest: string, characterMovie: number, characterSummary: string, characterSpoilerSummary: string ) {
  let newCharacter: Character = new Character(characterName, characterBirthdate, characterFirstAppearance, characterLastAppearance, characterPortrayedBy, characterHouse, characterFamily, characterLoveInterest, characterMovie, characterSummary, characterSpoilerSummary);

  this.wikiService.addCharacter(newCharacter);
}

  constructor(private wikiService: WikiService) { }

  ngOnInit() {
  }

}
