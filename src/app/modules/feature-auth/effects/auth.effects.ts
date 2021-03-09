import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { AuthActions } from '../actions';
import { LoginService } from '../services/login.service';
import { UserLogin } from '../models/login-page.models';
import { Router } from '@angular/router';
import { LoaderActions } from 'src/app/shared/progress-loader/actions';

const showLoaderTypes = [
    AuthActions.Login
]

const hideLoaderTypes = [
    AuthActions.LoginSuccess
]

//TODO: Make  an abstract Effect that will contain the loader logic.
@Injectable()
export class AuthEffects {

    constructor(
        private loginService: LoginService,
        private actions$: Actions,
        private router: Router
    ) { }

    login$ = createEffect(() => this.actions$.pipe(
        ofType(AuthActions.Login),
        mergeMap((payload: UserLogin) => this.loginService.login(payload)
            .pipe(
                map(response => AuthActions.LoginSuccess(response)),
                catchError(() => EMPTY))
        ))
    );

    loadMoviesHome$ = createEffect(() => this.actions$.pipe(
        ofType(AuthActions.LoginSuccess),
        tap(() => this.router.navigate(['home']))
    ),
        { dispatch: false });

    /**
     * These two effects below can be abstracted way into a directive or abstract class in order to be reusable.
     */
    showLoader$ = createEffect(() => this.actions$.pipe(
        ofType(...showLoaderTypes),
        map(() => LoaderActions.ShowLoader()))
    );

    hideLoader$ = createEffect(() => this.actions$.pipe(
        ofType(...hideLoaderTypes),
        map(() => LoaderActions.HideLoader()))
    );
}

