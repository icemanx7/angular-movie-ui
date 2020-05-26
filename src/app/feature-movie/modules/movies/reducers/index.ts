import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as MovieReducer from './movie.reducer';


export interface AppState {
  movies: MovieReducer.MovieState;
}

export const getMovieState = createFeatureSelector<MovieReducer.MovieState>('movies');

// export const selectFeature = (state: AppState) => state.movies;

// export const getIsMoviesLoading = createSelector(
//   selectFeature,
//   (state: MovieReducer.State) => state.loading
// );

export const getMovies = createSelector(
  getMovieState,
  (state) => state.movieList
);

export const getIsLoadingMovies = createSelector(
  getMovieState,
  (state) => state.loading
);

// export const getJwtToken = createSelector(
//   selectFeature,
//   (state: MovieReducer.State) => ( { jwtToken: state.jwtToken, isLoggedIn: state.loggedIn } as UserLoginSecrets )
// );
