import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { EMPTY, Observable } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as  movieActions from '../actions/movie.actions';
import { MovieService } from '../services/movie.service';
import { Action } from '@ngrx/store';

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
                    console.log('IS EFFECT WORKING   ')
                    return movieActions.LoadMoviesListSuccess(response)
                }),
                catchError(() => EMPTY))
        ))
    );

    // @Effect()
    // onGetViewAmendmentData$: Observable<Action> = this.actions$.pipe(
    //     ofType(movieActions.LoadMoviesList),
    //     mergeMap(() =>
    //         this.movieService.loadMoviesList()
    //             .pipe(
    //                 map((response: any) => (new movieActions.LoadMoviesListSuccess(response))),
    //                 catchError(error => of(new movieActions.LoadMoviesListFailed()))
    //             )
    //     )
    // );

}
