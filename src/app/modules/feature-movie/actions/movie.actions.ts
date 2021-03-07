import { Action, createAction, props } from '@ngrx/store';
import { Movies, UserDetails, MovieReview, Movie } from '../models/movies.models';


/*
Make a big enum containinng all the action text for easy and quick changes.
*/

export enum ActionTypes {

    LOAD_MOVIE_LIST = '[Movie Page] Load Movie List',
    LOAD_MOVIE_LIST_SUCCESS = '[Movie Page] Load Movie List Success',
    LOAD_MOVIE_LIST_FAILED = '[Movie Page] Load Movie List Failed',

    SUBMIT_MOVIE_REVIEW = '[Movie Page] Submit Movie Review',
    SUBMIT_MOVIE_REVIEW_SUCCESS = '[Movie Page] Submit Movie Review Success',
    SUBMIT_MOVIE_REVIEW_FAILED = '[Movie Page]  Submit Movie Review Failed',


    LIKE_MOVIE = '[Movie Page] Like Movie',
    LIKE_MOVIE_SUCCESS = '[Movie Page] Like Movie Success',
    LIKE_MOVIE_FAILED = '[Movie Page] Like Movie Failed',

  
}

export class LoadMoviesList implements Action {
    readonly type = ActionTypes.LOAD_MOVIE_LIST;

    constructor() { }
}

export class LoadMoviesListSuccess implements Action {

    readonly type = ActionTypes.LOAD_MOVIE_LIST_SUCCESS;

    constructor(public payload: Movies) { }

}

export class LoadMoviesListFailed implements Action {

    readonly type = ActionTypes.LOAD_MOVIE_LIST_FAILED;

    constructor(public payload: any) { }

}

export class SubmitMovieReview implements Action {

    readonly type = ActionTypes.SUBMIT_MOVIE_REVIEW;

    constructor(public payload: MovieReview & UserDetails) { }
}

export class SubmitMovieReviewSuccess implements Action {

    readonly type = ActionTypes.SUBMIT_MOVIE_REVIEW_SUCCESS;

    constructor(public payload: MovieReview) { }
}

export class SubmitMovieReviewFailed implements Action {

    readonly type = ActionTypes.SUBMIT_MOVIE_REVIEW_FAILED;

    constructor(public payload: any) { }
}


export class LikeMovie implements Action {

    readonly type = ActionTypes.LIKE_MOVIE;

    constructor(public payload: Movie) { }
}

export class LikeMovieSuccess implements Action {

    readonly type = ActionTypes.LIKE_MOVIE_SUCCESS;

    constructor(public payload?: any) { }
}

export class LikeMovieFailed implements Action {

    readonly type = ActionTypes.LIKE_MOVIE_FAILED;

    constructor(public payload?: any) { }
}

export type Actions =
    LoadMoviesList |
    LoadMoviesListSuccess |
    LoadMoviesListFailed |
    SubmitMovieReview |
    SubmitMovieReviewSuccess |
    SubmitMovieReviewFailed |
    LikeMovie |
    LikeMovieSuccess |
    LikeMovieFailed
