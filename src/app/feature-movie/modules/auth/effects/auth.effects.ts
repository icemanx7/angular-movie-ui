import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import * as  authActions from '../actions/login-page.actions';
import { LoginService } from '../services/login.service';
import { UserLogin } from '../models/login-page.models';
import { Router } from '@angular/router';

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
                map(response => authActions.LoginSuccess()),
                catchError(() => EMPTY))
        ))
    );

    loadMoviesHome$ = createEffect(() => this.actions$.pipe(
        ofType(authActions.LoginSuccess),
        tap(() => this.router.navigate(['movies-home']))
    ),
    { dispatch: false });
}
