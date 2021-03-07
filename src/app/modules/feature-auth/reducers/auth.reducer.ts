import { Action, createReducer, on } from '@ngrx/store';
import { AuthActions } from '../actions';

export interface State {
    loggedIn: boolean;
    loading: boolean;
    jwtToken: string;
    name: string;
    displayName: string
}

export const initialState: State = {
    loggedIn: false,
    loading: false,
    jwtToken: null,
    name: null,
    displayName: null
};


const authReducer = createReducer(
    initialState,

    on(AuthActions.Login, state => (
        { ...state, loading: true }
    )),

    on(AuthActions.LoginSuccess, (state, action) => (
        {
            ...state,
            loading: false,
            loggedIn: true,
            jwtToken: action.jwtToken,
            displayName: action.displayName,
            name: action.name
        })),
);


export function reducer(state: State | undefined, action: Action) {
    return authReducer(state, action);
}
