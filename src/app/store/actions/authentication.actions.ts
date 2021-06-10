import { Action } from '@ngrx/store';

export enum AuthenticationActionTypes {
  LOGIN = '[Authentication] Login',
  LOGIN_SUCCESS = '[Authentication] Login Success',
  LOGIN_FAILURE = '[Authentication] Login Failure',
  LOGOUT = '[Authentication] Logout',
}

export class Login implements Action {
  readonly type: AuthenticationActionTypes = AuthenticationActionTypes.LOGIN;
  constructor(public payload: any) { }
}

export class LoginSuccess implements Action {
  readonly type:AuthenticationActionTypes = AuthenticationActionTypes.LOGIN_SUCCESS;
  constructor(public payload: any) { }
}

export class LoginFailure implements Action {
  readonly type:AuthenticationActionTypes = AuthenticationActionTypes.LOGIN_FAILURE;
  constructor(public payload: any) { }
}

export class Logout implements Action {
  readonly type:AuthenticationActionTypes = AuthenticationActionTypes.LOGOUT;
  constructor(public payload: any) { }
}

export type AuthenticationActions =
  | Login
  | LoginSuccess
  | LoginFailure
  | Logout;
