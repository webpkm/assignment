import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError, tap } from 'rxjs/operators';

import {
  AuthenticationActionTypes,
  Login, LoginSuccess, LoginFailure, Logout
} from '../actions/authentication.actions';
import { LoginService } from 'src/app/shared/services/login.service';
import { User } from 'src/app/shared/models/types';


@Injectable()
export class AuthenticationEffects {

  constructor(
    private actions: Actions,
    private loginService: LoginService,
    private router: Router,
  ) { }

  @Effect()
  Login: Observable<any> = this.actions.pipe(
    ofType(AuthenticationActionTypes.LOGIN),
    map((action: Login) => action.payload),
    switchMap(payload => {
      return this.loginService.login(payload.username, payload.password)
        .pipe(
          map((users) => {
            const user: any = users.find(u => u.username === payload.username);
            if (user) {
              if (user.password === payload.password) {
                // console.log(user);
                return new LoginSuccess({ token: '12345', username: payload.username });
              }
            }
            return new LoginFailure({ error: 'Invalid username or password' });
          }),
          catchError((error) => {
            return of(new LoginFailure({ error: error }));
          }));
    }));


  @Effect({ dispatch: false })
  LoginSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthenticationActionTypes.LOGIN_SUCCESS),
    tap((user: any) => {
      //when the user logs in successfully, the token and username are saved to sessionStorage
      sessionStorage.setItem('token', user.payload.token);
      sessionStorage.setItem('username', user.payload.username);
      this.router.navigateByUrl('/dashboard');
    })
  );

  @Effect({ dispatch: false })
  LoginFailure: Observable<any> = this.actions.pipe(
    ofType(AuthenticationActionTypes.LOGIN_FAILURE)
  );

  @Effect({ dispatch: false })
  public Logout: Observable<any> = this.actions.pipe(
    ofType(AuthenticationActionTypes.LOGOUT),
    tap((user) => {
      //when the user log out the token and username are removed from sessionStorage
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('username');
      this.router.navigateByUrl('/login');
    })
  );
}