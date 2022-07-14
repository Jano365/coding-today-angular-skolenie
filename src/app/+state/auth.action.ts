// import { Action } from '@ngrx/store';
// import { Authenticate } from 'src/app/views/login/interfaces/Authenticate.interface';

import { Token } from '@angular/compiler';
import { createAction, props } from '@ngrx/store';
import { Authenticate } from '../login/login-form/authenticate.interface';
import { User } from '../login/login-form/user.interface';

// export enum AuthActionTypes {
//   Login = '[Auth Page] Login',
//   LoginSuccess = '[Auth API] Login Success',
//   LoginFail = '[Auth API] Login Fail'
// }

// export class Login implements Action {
//   readonly type = AuthActionTypes.Login;
//   constructor(public payload: Authenticate) {}
// }
// export class LoginSuccess implements Action {
//   readonly type = AuthActionTypes.LoginSuccess;
//   constructor(public payload: any) {}
// }

// export class LoginFail implements Action {
//   readonly type = AuthActionTypes.LoginFail;
//   constructor(public payload: any) {}
// }

// export type AuthActions = Login | LoginSuccess | LoginFail;

export const Login = createAction(
  '[Auth Page] Login',
  props<{ payload: Authenticate }>()
);

export const LoginSuccess = createAction(
  '[Auth API] Login Success',
  props<{ payload: User }>()
);

export const LoginFail = createAction(
  '[Auth API] Login Fail',
  props<{ payload: any }>()
);