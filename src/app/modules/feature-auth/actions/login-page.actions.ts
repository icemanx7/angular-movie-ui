import { createAction, props } from '@ngrx/store';
import { AuthModels } from '../models'

export const Login = createAction(
    '[Login Page Component] Login',
    props<AuthModels.UserLogin>()
);

export const LoginSuccess = createAction(
    '[Login Page Success Component] Login',
    props<AuthModels.UserLoginResponse>()
);

export const LoginFailed = createAction(
    '[Login Page Failed Component] Login'
);