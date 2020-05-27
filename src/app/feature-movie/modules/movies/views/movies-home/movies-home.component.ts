import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as auth from '../../../auth/reducers';
import * as fromMovies from '../../../movies/reducers';
import { LoadMoviesList } from '../../actions/movie.actions';
import { Movies, Movie } from '../../models/movies.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies-home',
  templateUrl: './movies-home.component.html',
  styleUrls: ['./movies-home.component.scss']
})
export class MoviesHomeComponent implements OnInit {

  movies$: Observable<Movies> = this.store.pipe(select(fromMovies.getMovies));
  selectedMovie: Movie;

  constructor(
    public store: Store<auth.AppState>
  ) { }

  ngOnInit() {
    this.store.dispatch(LoadMoviesList());
  }

  setSelectedMovie(movie: Movie): void {
    console.log('MOVIES: ', movie)
    this.selectedMovie = movie;
  }

  get displayMovie(): boolean {
    return this.selectedMovie ? true : false;
  }

}
