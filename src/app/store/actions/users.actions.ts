import { createAction, props } from '@ngrx/store';
import { UserModel } from 'src/app/models/user.model';

export const LOAD_USERS_ACTION = createAction('LOAD_USERS_ACTION');

export const LOAD_USERS_SUCCESS_ACTION = createAction(
    'LOAD_USERS_SUCCESS_ACTION',
    props<{ users: UserModel[] }>()
);

export const LOAD_USERS_ERROR_ACTION = createAction(
    'LOAD_USERS_ERROR_ACTION',
    props<{ payload: any }>()
);