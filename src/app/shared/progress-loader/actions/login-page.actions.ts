import { createAction } from '@ngrx/store';

export const ShowLoader = createAction(
    '[Progress Loader] Show Loader'
);

export const HideLoader = createAction(
    '[Progress Loader] Hide Loader'
);
