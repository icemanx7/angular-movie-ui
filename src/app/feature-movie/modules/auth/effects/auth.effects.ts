import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as  authActions from '../actions/login-page.actions';
import { LoginService } from '../services/login.service';
import { UserLogin } from '../models/login-page.models';

@Injectable()
export class AuthEffects {

    constructor(private loginService: LoginService, private actions$: Actions) { }

    loadMovies$ = createEffect(() => this.actions$.pipe(
        ofType(authActions.Login),
        mergeMap((payload: UserLogin) => this.loginService.login(payload)
            .pipe(
                map(response => authActions.LoginSuccess()),
                catchError(() => EMPTY))
            ))
    );
}
