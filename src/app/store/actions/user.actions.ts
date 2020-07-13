import { createAction, props } from '@ngrx/store';
import { UserModel } from '../../models/user.model';

export const LOAD_USER_ACTION = createAction(
    'LOAD_USER_ACTION',
    props<{ id: string }>()
);

export const LOAD_USER_SUCCESS_ACTION = createAction(
    'LOAD_USER_SUCCESS_ACTION',
    props<{ user: UserModel }>()
);

export const LOAD_USER_ERROR_ACTION = createAction(
    'LOAD_USER_ERROR_ACTION',
    props<{ payload: any }>()
);