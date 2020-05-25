import { Action, createReducer, on } from '@ngrx/store';
import * as MovieActions from '../actions/movie.actions';
import { Movies } from '../models/movies.models';

export interface State {
    loading: boolean;
    movieList: Movies;
}

export const initialState: State = {
    loading: false,
    movieList: null
};


const movieReducer = createReducer(
    initialState,
    on(MovieActions.LoadMoviesList, state => ({ ...state, loading: true })),
    on(MovieActions.LoadMoviesListSuccess, (state, action) => ({ ...state, loading: false, movieList: action })),
);

export function reducer(state: State | undefined, action: Action) {
    return movieReducer(state, action);
}
