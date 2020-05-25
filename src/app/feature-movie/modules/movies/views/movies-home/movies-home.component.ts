import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as auth from '../../../auth/reducers';
import * as fromMovies from '../../../movies/reducers';
import { LoadMoviesList } from '../../actions/movie.actions';

@Component({
  selector: 'app-movies-home',
  templateUrl: './movies-home.component.html',
  styleUrls: ['./movies-home.component.scss']
})
export class MoviesHomeComponent implements OnInit {

  constructor(
    public store: Store<auth.AppState>
  ) { }

  ngOnInit() {
    this.store.dispatch(LoadMoviesList());
    this.store.pipe(select(fromMovies.getMovies)).subscribe(movies => console.log('THE MOVIES: ', movies))
  }

}
