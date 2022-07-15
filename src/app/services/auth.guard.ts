import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthUser } from '../shared/interfaces/auth-user.interface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate() : Observable<boolean> {
    return this.authService.user$.pipe(map((user: AuthUser | null) => {
      if(!!user && user.id) {
        return true
      } else {
        this.router.navigate(['/login']);
        console.log('In else')
        return false
      }
    }))
  }
  
}
