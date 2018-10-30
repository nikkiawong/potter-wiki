import { Component, OnInit } from '@angular/core';
import { WikiService } from '../wiki.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  providers: [WikiService]
})
export class MoviesComponent implements OnInit {

  movies: FirebaseListObservable<any[]>;

  constructor(private route: ActivatedRoute, private location: Location, private database: WikiService) { }
  movieKey: string;
  movieToShow;

  ngOnInit() {
    this.movies = this.database.getMovies();
    this.movies.subscribe(res => console.log(res));

    this.route.params.forEach((urlParameters) => {
      this.movieKey = urlParameters['$key'];
    });
    this.database.getMovieByKey(this.movieKey).subscribe(dataIn => {
     this.movieToShow = dataIn;
     console.log(this.movieToShow);
   })
 }
}
