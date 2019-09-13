import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/login-page.actions';

export interface State {
    loggedIn: boolean;
    loading: boolean;
    jwtToken: string;
}

export const initialState: State = {
    loggedIn: false,
    loading: false,
    jwtToken: null
};


const scoreboardReducer = createReducer(
    initialState,
    on(AuthActions.Login, state => ({ ...state, loading: true })),
    on(AuthActions.LoginSuccess, ( state , action ) => ({ ...state, loading: false, loggedIn: true, jwtToken: action.jwtToken  })),
);

export function reducer(state: State | undefined, action: Action) {
    return scoreboardReducer(state, action);
}
