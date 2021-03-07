import { MovieActions } from '../actions';
import { Movies } from '../models/movies.models';

export interface MovieState {
    loading: boolean;
    movieList: Movies;
}

export const initialState: MovieState = {
    loading: false,
    movieList: null
};

export function reducer(
    state = initialState,
    action: MovieActions.Actions
): MovieState {

    switch (action.type) {

        case MovieActions.ActionTypes.LOAD_MOVIE_LIST: {
            return {
                ...state,
                loading: true
            };
        }

        case MovieActions.ActionTypes.LOAD_MOVIE_LIST_SUCCESS: {
            return {
                ...state,
                loading: false,
                movieList: action.payload
            };
        }

        default:
            return state;

    }

}