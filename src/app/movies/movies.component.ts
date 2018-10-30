import { Component, OnInit } from '@angular/core';
import { WikiService } from '../wiki.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  providers: [WikiService]
})
export class MoviesComponent implements OnInit {

  movies: FirebaseListObservable<any[]>;

  constructor(private database: WikiService) { }

  ngOnInit() {
    this.movies = this.database.getMovies();
    this.movies.subscribe(res => console.log(res));
  }

}
