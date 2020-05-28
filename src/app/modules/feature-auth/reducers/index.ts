import { createSelector } from '@ngrx/store';
import * as AuthReducer from './auth.reducer';
import { UserLoginSecrets } from '../models/login-page.models';


export interface AppState {
  auth: AuthReducer.State;
}

export const selectFeature = (state: AppState) => state.auth;

export const getIsLoggedIn = createSelector(
  selectFeature,
  (state: AuthReducer.State) => state.loggedIn
);

export const getJwtToken = createSelector(
  selectFeature,
  (state: AuthReducer.State) => ({ jwtToken: state.jwtToken, isLoggedIn: state.loggedIn } as UserLoginSecrets)
);

export const getDisplayName = createSelector(
  selectFeature,
  (state: AuthReducer.State) => state.displayName
);