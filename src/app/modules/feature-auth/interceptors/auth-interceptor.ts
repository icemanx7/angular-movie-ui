import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import * as auth from '../reducers';
import { Store } from '@ngrx/store';
import { first, mergeMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private readonly _store: Store<auth.AppState>) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this._store.select(auth.getJwtToken).pipe(
      first(),
      mergeMap(loginSecrets => {
        if (loginSecrets.isLoggedIn) {
          const authReq = req.clone({ setHeaders: { Authorization: loginSecrets.jwtToken } });
          return next.handle(authReq);
        }
        return next.handle(req);
      })
    )
  }
}