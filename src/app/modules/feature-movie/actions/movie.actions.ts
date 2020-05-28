import { createAction, props } from '@ngrx/store';
import { Movies } from '../models/movies.models';

export const LoadMoviesList = createAction(
    '[Movie Page] Load Movies'
);

export const LoadMoviesListSuccess = createAction(
    '[Movie Page] Load Movies Success',
    props<Movies>()
);

export const LoadMoviesListFailed = createAction(
    '[Movie Page] Load Movies Failed'
);