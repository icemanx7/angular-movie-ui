import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as auth from './modules/feature-auth/reducers';
import { Observable } from 'rxjs';

const REVIEW_ROUTE = 'my-reviews';
const HOME_ROUTE = 'home';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angular-movie-ui';

  sideNaveOpened: boolean;
  panelOpenState: boolean;

  isLoggedIn: Observable<boolean> = this.store.pipe(select(auth.getIsLoggedIn));
  displayName: Observable<string> = this.store.pipe(select(auth.getDisplayName));

  constructor(
    public store: Store<auth.AppState>,
    public router: Router
  ) { }

  ngOnInit(): void {

  }

  routeToHome() {
    this.router.navigate([HOME_ROUTE]);

  }

  routeToReview() {
    this.router.navigate([REVIEW_ROUTE]);

  }

}
