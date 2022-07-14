import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from './login/login-form/auth.service';
import { User } from './login/login-form/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {

  }

  canActivate(): Observable<boolean> {

    return this.authService.user$.pipe(map((user: User | null) => {
      if (!!user && !!user.id) {
        return true
      } else {
        this.router.navigate(['/login']);
        return false
      }
    }))

  }

}