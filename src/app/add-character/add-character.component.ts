import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WikiService } from '../wiki.service';
import { Character } from '../models/character.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.scss'],
  providers: [WikiService]
})
export class AddCharacterComponent implements OnInit {
// @Output() sendCharacter = new EventEmitter();

submitForm(characterName: string, characterBirthdate: string, characterFirstAppearance: string, characterLastAppearance: string, characterPortrayedBy: string[], characterHouse: string, characterFamily: string[], characterLoveInterest: string, characterMovie: number, characterMovieSpecificSummary: string[], characterMovieSpecificSpoilerSummary: string[], characterPhoto: string[] ) {
  let newCharacter: Character = new Character(characterName, characterBirthdate, characterFirstAppearance, characterLastAppearance, characterPortrayedBy, characterHouse, characterFamily, characterLoveInterest, characterMovie, characterMovieSpecificSummary, characterMovieSpecificSpoilerSummary, characterPhoto);

  this.wikiService.addCharacter(newCharacter);
}

  constructor(private wikiService: WikiService, private route: Router) { }
  public show: boolean = false;

  reloadRoute() {
    this.show
  }

  ngOnInit() {
  }

}
