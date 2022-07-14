import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as authActions from './auth.action'
import { Router } from '@angular/router';
import { AuthService } from '../login/login-form/auth.service';

@Injectable()
export class AuthEffects {
  
  login$ = createEffect(() => this.actions$.pipe(
    ofType(authActions.Login),
    mergeMap(({payload}) =>
      this.authService
        .login(payload)
        .pipe(
          map((user: any) => {
            return authActions.LoginSuccess({payload: user})
          }),
          catchError(error => of(authActions.LoginFail(error)))
        )
    )
  )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authActions.LoginSuccess),
        map(({payload}) => payload),
        tap(token => {
          localStorage.setItem('token', JSON.stringify(token))
        })
      ),
    { dispatch: false }
  );



  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}