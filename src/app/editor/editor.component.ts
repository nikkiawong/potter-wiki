import { Component, OnInit, Input } from '@angular/core';
import { WikiService } from '../wiki.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  providers: [WikiService]
})
export class EditorComponent implements OnInit {
  @Input() selectedCharacter;
  
  constructor(private database: WikiService) { }
  
  ngOnInit() {
  }
  
  beginUpdatingCharacter(characterToUpdate){
    this.database.updateCharacter(characterToUpdate);
  }
  
}

