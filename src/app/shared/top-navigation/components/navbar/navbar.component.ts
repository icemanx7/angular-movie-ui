import { Component, OnInit } from '@angular/core';
import { select } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as authSelects from '../../.././../modules/feature-auth/reducers';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor(private store: Store<authSelects.AppState>) { }

  isLoggedIn: boolean = false;
  subscriptions: Subscription[] = [];

  ngOnInit() {
    this._pushToSubscriptionList(this._subscribeToLoggedIn());
  }

  get loggedIn(): boolean {
    return this.isLoggedIn;
  }

  private _subscribeToLoggedIn(): Subscription {
    return this.store.pipe(select(authSelects.getIsLoggedIn)).subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  private _pushToSubscriptionList(sub: Subscription): void {
    this.subscriptions.push(sub);
  }

}
