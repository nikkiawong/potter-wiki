import { Component, OnInit } from '@angular/core';
import { WikiService } from '../wiki.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [WikiService]
})

export class AdminComponent implements OnInit {
  characters: FirebaseListObservable<any[]>;
  movies: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  
  constructor(private router: Router, private database: WikiService) { }
  
  public show:boolean = false;
  
  ngOnInit() {
    this.characters = this.database.getCharacters();
    this.movies = this.database.getMovies();
    this.characters.subscribe(res => console.log(res[0]));
    this.show = false;
  }
  
  toggle() {
    this.show = !this.show;
  }
  
}

