import { Action, createReducer, on } from '@ngrx/store';
import { LoaderActions } from '../actions';

export interface State {
    showLoader: boolean;
    loading: boolean;
}

export const initialState: State = {
    showLoader: false,
    loading: false
};


const loaderReducer = createReducer(
    initialState,

    on(LoaderActions.ShowLoader, state => (
        { showLoader: true, loading: true }
    )),

    on(LoaderActions.HideLoader, (state, action) => (
        {
            showLoader: false,
            loading: false
        })),
);


export function reducer(state: State | undefined, action: Action) {
    return loaderReducer(state, action);
}
