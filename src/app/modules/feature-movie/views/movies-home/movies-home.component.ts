import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as auth from '../../../feature-auth/reducers';
import * as fromMovies from '../../reducers';
import { MovieActions } from '../../actions';
import { Movies, Movie, MovieReview, UserDetails } from '../../models/movies.models';
import { Observable, Subscription } from 'rxjs';
import { AbstractView } from 'src/app/shared/directives/abstract-view';

@Component({
  selector: 'app-movies-home',
  templateUrl: './movies-home.component.html',
  styleUrls: ['./movies-home.component.scss']
})
export class MoviesHomeComponent extends AbstractView implements OnInit, OnDestroy {

  selectedMovie: Movie;
  movies: Movies;

  subscriptions: Subscription[] = [];
  currentUser: UserDetails;

  constructor(
    public store: Store<auth.AppState>
  ) { super() }


  ngOnInit() {
    this.store.dispatch(MovieActions.LoadMoviesList());

    const userDetails = this._subscribeToUserDetails();
    const movieLists = this._subscribeToMovieList();

    this._pushToSubscriptionList(userDetails)
    this._pushToSubscriptionList(movieLists)
  }

  setSelectedMovie(movie: Movie): void {
    this.selectedMovie = movie;
  }

  get listOfMovies(): Movie[] {
    if (this.movies && this.movies.movies) {
      return this.movies.movies;
    }
    return null;
  }

  get displayMovie(): boolean {
    return this.selectedMovie ? true : false;
  }

  private _subscribeToMovieList(): Subscription {
    return this.store.pipe(select(fromMovies.getMovies)).subscribe(moviesList => {
      this.movies = moviesList;
    });
  }

  private _subscribeToUserDetails(): Subscription {
    return this.store.pipe(select(auth.getUserName)).subscribe(username => {
      this.currentUser = { username: username } as UserDetails;
    })
  }

}
