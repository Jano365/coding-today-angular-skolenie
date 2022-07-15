import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { AuthUser } from '../shared/interfaces/auth-user.interface';
import { Authenticate } from '../shared/interfaces/authenticate.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject$ = new BehaviorSubject<AuthUser | null>(null);
  user$ = this.userSubject$.asObservable();

  constructor(private httpClient: HttpClient, private router: Router) { }

  login(payload: Authenticate): Observable<AuthUser> {
    return this.httpClient.post<AuthUser>('http://gopas.testingwebwordpress.cz/login.php', payload)
      .pipe(tap((response: AuthUser) => {
        this.userSubject$.next(response);
        localStorage.setItem('token', response.token)
        this.router.navigate(['/films'])
      }))
  }

  resolve(token: string) {
    return this.httpClient.post<AuthUser>('http://gopas.testingwebwordpress.cz/resolve-user.php', { token })
    .pipe(tap((response: AuthUser) => {
      this.userSubject$.next(response);
      this.router.navigate(['/films'])
    }))
  }
}
