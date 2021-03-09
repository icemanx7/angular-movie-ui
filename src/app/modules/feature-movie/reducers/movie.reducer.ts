import { MovieActions } from '../actions';
import { Movies, Movie } from '../models/movies.models';
import { Action, createReducer, on } from '@ngrx/store';
import * as Immutable from 'immutable'

export interface MovieState {
    loading: boolean;
    movieList: Movies;
    likedMovies: Immutable.Set<Movie>;
}

export const initialState: MovieState = {
    loading: false,
    movieList: null,
    likedMovies: Immutable.Set<Movie>()
};

const movieReducer = createReducer(
    initialState,

    on(MovieActions.LoadMoviesList, state => (
        { ...state, loading: true }
    )),

    on(MovieActions.LoadMoviesListSuccess, (state, action) => (
        {
            ...state,
            loading: false,
            movieList: action
        })),

    on(MovieActions.LikeMovie, (state, action) => (
        {
            ...state,
            loading: false,
            likedMovies: state.likedMovies.add(new Movie(action))
        })),
);

export function reducer(state: MovieState | undefined, action: Action) {
    return movieReducer(state, action);
}
