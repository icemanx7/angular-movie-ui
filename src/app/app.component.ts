import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as auth from './modules/feature-auth/reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angular-movie-ui';

  sideNaveOpened: boolean;

  isLoggedIn: Observable<boolean> = this.store.pipe(select(auth.getIsLoggedIn));
  displayName: Observable<string> = this.store.pipe(select(auth.getDisplayName));

  constructor(
    public store: Store<auth.AppState>
  ) { }

  ngOnInit(): void {

  }

}
