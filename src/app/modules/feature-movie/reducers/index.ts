import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as MovieReducer from './movie.reducer';

export interface AppState {
  movies: MovieReducer.MovieState;
}

export const getMovieState = createFeatureSelector<MovieReducer.MovieState>('movies');

export const getMovies = createSelector(
  getMovieState,
  (state) => state.movieList
);

export const getIsLoadingMovies = createSelector(
  getMovieState,
  (state) => state.loading
);

export const getLikedMovies = createSelector(
  getMovieState,
  (state) => state.likedMovies
);

