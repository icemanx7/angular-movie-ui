import { Action, createAction, props } from '@ngrx/store';
import { Movies, UserDetails, MovieReview, Movie } from '../models/movies.models';

export const LoadMoviesList = createAction(
    '[Movie Page] Load Movie List'
);

export const LoadMoviesListSuccess = createAction(
    '[Movie Page] Load Movie List Success',
    props<Movies>()
);

export const LoadMoviesListFailed = createAction(
    '[Movie Page] Load Movie List Failed'
);

export const LikeMovie = createAction(
    '[Movie Page] Like Movie',
    props<Movie>()
);

export const LikeMovieSuccess = createAction(
    '[Movie Page] Like Movie Success',
);

export const LikeMovieFailed = createAction(
    '[Movie Page] Like Movie Failed'
);