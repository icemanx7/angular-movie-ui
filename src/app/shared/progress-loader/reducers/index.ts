import { createSelector } from '@ngrx/store';
import * as LoaderReducer from './loader.reducer';


export interface LoaderState {
  loader: LoaderReducer.State;
}

export const selectFeature = (state: LoaderState) => state.loader;

export const getShouldShowLoader = createSelector(
  selectFeature,
  (state: LoaderReducer.State) => state.showLoader
);

export const getIsLoading = createSelector(
  selectFeature,
  (state: LoaderReducer.State) => state.loading
);
