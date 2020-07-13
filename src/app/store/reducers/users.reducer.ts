import { createReducer, on } from '@ngrx/store';
import { LOAD_USERS_ACTION, LOAD_USERS_SUCCESS_ACTION, LOAD_USERS_ERROR_ACTION } from '../actions';
import { UserModel } from '../../models/user.model';

export interface UsersState {
    users: UserModel[],
    loaded: boolean,
    loading: boolean,
    error: any 
}

export const usersInitialState: UsersState = {
    users: [],
    loaded: false,
    loading: false,
    error: null 
}

const _usersReducer = createReducer(usersInitialState,

    on(LOAD_USERS_ACTION, state => ({ ...state, loading: true })),
    on(LOAD_USERS_SUCCESS_ACTION, (state, { users } )  => ({ 
        ...state, 
        loading: false,
        loaded: true,
        users: [ ...users ] 
    })),
    on(LOAD_USERS_ERROR_ACTION, (state, { payload } )  => ({ 
        ...state, 
        loading: false,
        loaded: false,
        error: payload 
    })),

);

export function usersReducer(state, action) {
    return _usersReducer(state, action);
}