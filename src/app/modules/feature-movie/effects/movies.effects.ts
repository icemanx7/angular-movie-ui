import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { EMPTY, Observable } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as  movieActions from '../actions/movie.actions';
import { MovieService } from '../services/movie.service';
import { Action } from '@ngrx/store';
import { MovieReview } from '../models/movies.models';

@Injectable()
export class MovieEffects {

    constructor(
        private movieService: MovieService,
        private actions$: Actions
    ) { }

    loadMovies$ = createEffect(() => this.actions$.pipe(
        ofType(movieActions.LoadMoviesList),
        mergeMap(() => this.movieService.loadMoviesList()
            .pipe(
                map(response => {
                    return movieActions.LoadMoviesListSuccess(response)
                }),
                catchError(() => EMPTY))
        ))
    );

    submitReview$ = createEffect(() => this.actions$.pipe(
        ofType(movieActions.SubmitMovieReview),
        mergeMap((action) => this.movieService.submitMovieReview(<MovieReview>action)
            .pipe(
                map(response => {
                    return movieActions.SubmitMovieReviewSuccess(response)
                }),
                catchError(() => EMPTY))
        ))
    );
}
