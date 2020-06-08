import { createAction, props } from '@ngrx/store';
import { Movies, UserDetails, MovieReview } from '../models/movies.models';


/*
Make a big enum containinng all the action text for easy and quick changes.
*/


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


export const SubmitMovieReview = createAction(
    '[Movie Page: Review Component] Submit Review',
    props<MovieReview & UserDetails>()
);

export const SubmitMovieReviewSuccess = createAction(
    '[Movie Page: Review Component] Submit Review Success',
    props<MovieReview>()
);


export const SubmitMovieReviewFailed = createAction(
    '[Movie Page: Review Component] Submit Review Failed',
    props<MovieReview>()
);