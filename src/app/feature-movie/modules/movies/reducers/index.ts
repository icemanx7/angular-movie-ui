import { createSelector } from '@ngrx/store';
import * as MovieReducer from './movie.reducer';


export interface AppState {
  movies: MovieReducer.State;
}

export const selectFeature = (state: AppState) => state.movies;

export const getIsMoviesLoading = createSelector(
  selectFeature,
  (state: MovieReducer.State) => state.loading
);

export const getMovies = createSelector(
  selectFeature,
  (state: MovieReducer.State) => state.movieList
);

// export const getJwtToken = createSelector(
//   selectFeature,
//   (state: MovieReducer.State) => ( { jwtToken: state.jwtToken, isLoggedIn: state.loggedIn } as UserLoginSecrets )
// );
