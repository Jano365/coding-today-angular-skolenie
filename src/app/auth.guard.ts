import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AuthState } from './+state/auth.reducer';
import { AuthService } from './login/login-form/auth.service';
import { User } from './login/login-form/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private store: Store<any>) {

  }

  canActivate(
  ): Observable<boolean> {
    return this.store.pipe(select((state) => state.auth.user),
      map(user => {
        console.log('USER', user)
        if (user) {
          return true;
        } else {
          this.router.navigate([`/login`]);
          return false;
        }
      })
    );
  }

}