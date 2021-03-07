import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { MovieActions } from '../actions';
import { MovieService } from '../services/movie.service';
import { MovieReview } from '../models/movies.models';

@Injectable()
export class MovieEffects {

    constructor(
        private readonly movieService: MovieService,
        private readonly actions$: Actions
    ) { }

    loadMovies$ = createEffect(() => this.actions$.pipe(
        ofType(MovieActions.ActionTypes.LOAD_MOVIE_LIST),
        mergeMap(() => this.movieService.loadMoviesList()
            .pipe(
                map(response => {
                    return new MovieActions.LoadMoviesListSuccess(response)
                }),
                catchError(() => EMPTY))
        ))
    );

    submitReview$ = createEffect(() => this.actions$.pipe(
        ofType(MovieActions.ActionTypes.SUBMIT_MOVIE_REVIEW),
        mergeMap((action) => this.movieService.submitMovieReview(<MovieReview>action)
            .pipe(
                map(response => {
                    return new MovieActions.SubmitMovieReviewSuccess(response)
                }),
                catchError(() => EMPTY))
        ))
    );
}
