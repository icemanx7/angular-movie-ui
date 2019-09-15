import { createAction, props } from '@ngrx/store';
import { UserLogin as UserLoginRequest, UserLoginResponse } from '../models/login-page.models';

export const Login = createAction(
    '[Login Page Component] Login',
    props<UserLoginRequest>()
);

export const LoginSuccess = createAction(
    '[Login Success Component] Login',
    props<UserLoginResponse>()
);

export const LoginFailed = createAction(
    '[Login Failed Component] Login'
);