import { createReducer, on } from '@ngrx/store';
import { LOAD_USER_ACTION, LOAD_USER_SUCCESS_ACTION, LOAD_USER_ERROR_ACTION } from '../actions';
import { UserModel } from '../../models/user.model';

export interface UserState {
    id: string, 
    user: UserModel,
    loaded: boolean,
    loading: boolean,
    error: any 
}

export const userInitialState: UserState = {
    id: null,
    user: null,
    loaded: false,
    loading: false,
    error: null 
}

const _userReducer = createReducer(userInitialState,

    on(LOAD_USER_ACTION, ( state, { id } ) => ({ 
        ...state, 
        loading: true,
        id: id
    })),

    on(LOAD_USER_SUCCESS_ACTION, (state, { user } )  => ({ 
        ...state, 
        loading: false,
        loaded: true,
        user: { ...user }
    })),

    on(LOAD_USER_ERROR_ACTION, (state, { payload } )  => ({ 
        ...state, 
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        }
    })),

);

export function userReducer(state, action) {
    return _userReducer(state, action);
}