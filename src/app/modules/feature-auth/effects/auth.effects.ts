import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import * as  authActions from '../actions/login-page.actions';
import { LoginService } from '../services/login.service';
import { UserLogin } from '../models/login-page.models';
import { Router } from '@angular/router';
import { LoaderActions } from 'src/app/shared/progress-loader/actions';


const showLoaderTypes = [
    authActions.Login
]

const hideLoaderTypes = [
    authActions.LoginSuccess
]

@Injectable()
export class AuthEffects {

    constructor(
        private loginService: LoginService,
        private actions$: Actions,
        private router: Router
    ) { }

    login$ = createEffect(() => this.actions$.pipe(
        ofType(authActions.Login),
        mergeMap((payload: UserLogin) => this.loginService.login(payload)
            .pipe(
                map(response => authActions.LoginSuccess(response)),
                catchError(() => EMPTY))
        ))
    );

    loadMoviesHome$ = createEffect(() => this.actions$.pipe(
        ofType(authActions.LoginSuccess),
        tap(() => this.router.navigate(['home']))
    ),
        { dispatch: false });


    showLoader$ = createEffect(() => this.actions$.pipe(
        ofType(...showLoaderTypes),
        map(() => LoaderActions.ShowLoader()))
    );


    hideLoader$ = createEffect(() => this.actions$.pipe(
        ofType(...hideLoaderTypes),
        map(() => LoaderActions.HideLoader()))
    );
}

