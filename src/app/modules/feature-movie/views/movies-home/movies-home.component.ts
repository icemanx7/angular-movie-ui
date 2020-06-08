import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as auth from '../../../feature-auth/reducers';
import * as fromMovies from '../../reducers';
import { LoadMoviesList, SubmitMovieReview } from '../../actions/movie.actions';
import { Movies, Movie, MovieReview, UserDetails } from '../../models/movies.models';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-movies-home',
  templateUrl: './movies-home.component.html',
  styleUrls: ['./movies-home.component.scss']
})
export class MoviesHomeComponent implements OnInit, OnDestroy {

  selectedMovie: Movie;

  subscriptions: Subscription[] = [];
  movies$: Observable<Movies> = this.store.pipe(select(fromMovies.getMovies));
  currentUser: UserDetails;

  constructor(
    public store: Store<auth.AppState>
  ) { }


  ngOnInit() {
    this.store.dispatch(LoadMoviesList());
    const userDetails$ = this.store.pipe(select(auth.getUserName)).subscribe(username => {
      console.log('USERNAME: ', username);
      this.currentUser = { username: username } as UserDetails;
    })
    this.subscriptions.push(userDetails$);
  }

  setSelectedMovie(movie: Movie): void {
    this.selectedMovie = movie;
  }

  submitReview(review: MovieReview) {
    if (!this.currentUser) {
      return;
    }
    const userReview = { ...review, ...this.currentUser } as MovieReview & UserDetails;
    this.store.dispatch(SubmitMovieReview(userReview));
  }

  get displayMovie(): boolean {
    return this.selectedMovie ? true : false;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
