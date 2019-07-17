import { createAction, props } from '@ngrx/store';
import { UserLogin } from '../models/login-page.models';

export const login = createAction(
    '[Login Page Component] Login',
    props<UserLogin>()
);