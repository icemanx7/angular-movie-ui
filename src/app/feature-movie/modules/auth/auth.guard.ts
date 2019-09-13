import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import * as auth from './reducers/auth.reducer';
import * as authSelects from './reducers';
import { Store, select } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private store: Store<authSelects.AppState>, private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.store.pipe(select(authSelects.getIsLoggedIn))
      .pipe(map((isLoggedIn) => {
        if (isLoggedIn) {
          return true;
        }
        this.router.navigate(['/']);
        return false;
      }))
  }

}
