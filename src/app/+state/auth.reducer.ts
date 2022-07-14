import { createReducer, on } from '@ngrx/store';
import { User } from '../login/login-form/user.interface';
import * as authActions from './auth.action'


export interface AuthState {
  loading: boolean;
  user: null | User;
  error: any;
}

export const initialState: AuthState = {
  error: null,
  user: null,
  loading: false
};

// export function authReducer(
//   state = initialState,
//   action: AuthActions
// ): AuthData {
//   switch (action.type) {
//     case AuthActionTypes.Login:
//       return { ...state, loading: true };

//     case AuthActionTypes.LoginSuccess: {
//       return { ...state, user: action.payload, loading: false };
//     }
//     case AuthActionTypes.LoginFail: {
//       return { ...state, user: null, loading: false };
//     }
//     default:
//       return state;
//   }
//}


export const authReducer = createReducer(
  initialState,
  on(authActions.Login, (state) => ({
    ...state, loading: true
  })),

  on(authActions.LoginSuccess, (state, {payload}) => ({
    ...state, loading: false, user: payload
  })),

  on(authActions.LoginFail, (state, {payload}) => ({
    ...state, loading: true, user: null, error: payload
  }))
)