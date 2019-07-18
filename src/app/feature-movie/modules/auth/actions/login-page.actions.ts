import { createAction, props } from '@ngrx/store';
import { UserLogin } from '../models/login-page.models';

export const Login = createAction(
    '[Login Page Component] Login',
    props<UserLogin>()
);

export const LoginSuccess = createAction(
    '[Login Success Component] Login'
);

export const LoginFailed = createAction(
    '[Login Failed Component] Login'
);