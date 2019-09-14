import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as  movieActions from '../actions/movie.actions';
import { MovieService } from '../services/movie.service';

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
                map(response => movieActions.LoadMoviesListSuccess(response)),
                catchError(() => EMPTY))
        ))
    );

}
