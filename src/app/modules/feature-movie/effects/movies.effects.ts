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
        ofType(MovieActions.LoadMoviesList),
        mergeMap(() => this.movieService.loadMoviesList()
            .pipe(
                map(response => {
                    return MovieActions.LoadMoviesListSuccess(response)
                }),
                catchError(() => EMPTY))
        ))
    );

}
