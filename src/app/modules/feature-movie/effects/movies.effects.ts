import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { MovieActions } from '../actions';
import { MovieService } from '../services/movie.service';
import { MovieReview } from '../models/movies.models';
import { LoaderActions } from 'src/app/shared/progress-loader/actions';


const showLoaderTypes = [
    MovieActions.LikeMovie,
    MovieActions.LoadMoviesList
]

const hideLoaderTypes = [
    MovieActions.LikeMovieSuccess,
    MovieActions.LoadMoviesListSuccess
]

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

    likeMovie$ = createEffect(() => this.actions$.pipe(
        ofType(MovieActions.LikeMovie),
        map(() => MovieActions.LikeMovieSuccess()))
    );

    showLoader$ = createEffect(() => this.actions$.pipe(
        ofType(...showLoaderTypes),
        map(() => LoaderActions.ShowLoader()))
    );

    hideLoader$ = createEffect(() => this.actions$.pipe(
        ofType(...hideLoaderTypes),
        map(() => LoaderActions.HideLoader()))
    );
}
