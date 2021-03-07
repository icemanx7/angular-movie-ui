import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { MovieActions } from '../../actions';
import { Movie, Movies, UserDetails } from '../../models/movies.models';
import * as auth from '../../../feature-auth/reducers';
import * as fromMovies from '../../reducers';
import { AbstractView } from 'src/app/shared/directives/abstract-view';


@Component({
  selector: 'app-liked-movies-home',
  templateUrl: './liked-movies-home.component.html',
  styleUrls: ['./liked-movies-home.component.scss']
})
export class LikedMoviesHomeComponent extends AbstractView implements OnInit {

  selectedMovie: Movie;
  movies: Movie[];

  subscriptions: Subscription[] = [];
  currentUser: UserDetails;

  constructor(
    public store: Store<auth.AppState>
  ) { super() }


  ngOnInit() {
    this.store.dispatch(new MovieActions.LoadMoviesList());

    const userDetails = this._subscribeToUserDetails();
    const movieLists = this._subscribeToMovieList();

    this._pushToSubscriptionList(userDetails)
    this._pushToSubscriptionList(movieLists)
  }

  setSelectedMovie(movie: Movie): void {
    this.selectedMovie = movie;
  }

  get listOfMovies(): Movie[] {
    if (this.movies && this.movies) {
      return this.movies;
    }
    return null;
  }

  get displayMovie(): boolean {
    return this.selectedMovie ? true : false;
  }

  private _subscribeToMovieList(): Subscription {
    return this.store.pipe(select(fromMovies.getLikedMovies)).subscribe(moviesList => {
      this.movies = moviesList;
    });
  }

  private _subscribeToUserDetails(): Subscription {
    return this.store.pipe(select(auth.getUserName)).subscribe(username => {
      this.currentUser = { username: username } as UserDetails;
    })
  }

}
