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

    // LOGIN_REDIRECT = '[Auth] Login Redirect',
    // LOGIN_DISPLAY_LOGOUT = '[Auth] Login Display Logout',
    // LOGIN_RESET_DISPLAY_LOGOUT = '[Auth] Login Reset Display Logout',

    // LOGOUT = '[Auth] Logout',
    // LOGOUT_SUCCESS = '[Auth] Logout Success',
    // LOGOUT_FAILED = '[Auth] Logout Failed',

    // REDIRECT_EXTERNAL = '[Auth] Redirect external',
    // REDIRECT_EXTERNAL_SUCCESS = '[Auth] Redirect External Success',
    // REDIRECT_EXTERNAL_FAILED = '[Auth] Redirect External Failed',

    // EXTEND_LOGOUT_TIMER = '[Auth] Extend Logout Timer',
    // SHOW_LOGOUT_TIMER_DIALOG = '[Auth] Show Logout Timer Dialog',

    // LOAD_ELIGIBILITY = '[Eligibility] Load',
    // LOAD_ELIGIBILITY_SUCCESS = '[Eligibility] Load Success',
    // LOAD_ELIGIBILITY_FAILED = '[Eligibility] Load Failed',

    // LOAD_USER = '[User] Load',
    // LOAD_USER_SUCCESS = '[User] Load Success',
    // LOAD_USER_FAILED = '[User] Load Failed',

    // CONTAINER_LOGIN = '[Auth] Container Login',
    // CONTAINER_LOGIN_SUCCESS = '[Auth] Container Login Success',
    // CONTAINER_LOGIN_FAILED = '[Auth] Container Login Failed',

    // SAVE_JWTTOKEN = '[Auth] Save JWT Token',
    // SAVE_JWTTOKEN_SUCCESS = '[Auth] Save JWT Token Success',
    // SAVE_JWTTOKEN_FAILED = '[Auth] Save JWT Token Failed',

    // ENCRYPT_PARTY_ID = '[Auth] Encrypt party Id',
    // ENCRYPT_PARTY_ID_SUCCESS = '[Auth] Encrypt party Id Success',
    // ENCRYPT_PARTY_ID_FAILED = '[Auth] Encrypt party Id Failed',

    // SET_USER_ID = '[Auth] Set UserId',
    // SET_USER_ID_SUCCESS = '[Auth] Set User Id Success',
    // SET_USER_ID_FAILED = '[Auth] Set User Id Success',

    // SET_CUSTOMS_INFO = '[Auth] Set Customs Information'
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

// export const LoadMoviesList = createAction(
//     '[Movie Page] Load Movies'
// );

// export const LoadMoviesListSuccess = createAction(
//     '[Movie Page] Load Movies Success',
//     props<Movies>()
// );

// export const LoadMoviesListFailed = createAction(
//     '[Movie Page] Load Movies Failed'
// );

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


// export const SubmitMovieReview = createAction(
//     '[Movie Page: Review Component] Submit Review',
//     props<MovieReview & UserDetails>()
// );

// export const SubmitMovieReviewSuccess = createAction(
//     '[Movie Page: Review Component] Submit Review Success',
//     props<MovieReview>()
// );


// export const SubmitMovieReviewFailed = createAction(
//     '[Movie Page: Review Component] Submit Review Failed',
//     props<MovieReview>()
// );

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