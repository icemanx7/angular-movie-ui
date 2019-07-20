import { createSelector } from '@ngrx/store';
import * as AuthReducer from './auth.reducer';
     
 
export interface AppState {
  auth: AuthReducer.State;
}
 
export const selectFeature = (state: AppState) => state.auth;
 
export const selectIsLogginIn = createSelector(
  selectFeature,
  (state: AuthReducer.State) => state.loggedIn
);