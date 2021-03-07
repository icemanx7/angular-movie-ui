import { MovieActions } from '../actions';
import { Movies, Movie } from '../models/movies.models';
import { MovieSet, MovieSetItem } from '../../../shared/extensions/myset';

export interface MovieState {
    loading: boolean;
    movieList: Movies;
    likedMovies: Movie[];
}

export const initialState: MovieState = {
    loading: false,
    movieList: null,
    likedMovies: []
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

        case MovieActions.ActionTypes.LIKE_MOVIE: {
            const movieSet = new MovieSet<Movie>();
            state.likedMovies.forEach(movie => movieSet.add(new Movie(movie)));
            const likedMovieSet = movieSet.add(new Movie(action.payload));
            const linkedMovieArray = Array.from(likedMovieSet)
            return {
                ...state,
                likedMovies: linkedMovieArray
            }
        }

        default:
            return state;

    }

}