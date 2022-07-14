import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Authenticate } from './authenticate.interface';
import { Token } from './token.interface';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject$ = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject$.asObservable();

   constructor(private httpClient: HttpClient, private router: Router) {
   }

   login(authenticate: Authenticate) : Observable<Token> {
    return this.httpClient.post<User>('http://gopas.testingwebwordpress.cz/login.php', authenticate)
    // .pipe(tap((response: User) => {
    //   localStorage.setItem('token', JSON.stringify(response.token))
    //   this.userSubject$.next(response)

    // }))
  }

  resolve(token: Token) : Observable<User> {
    return this.httpClient.post<User>('http://gopas.testingwebwordpress.cz/resolve-user.php', token)
    // .pipe(tap((response: User) => {
    //   this.userSubject$.next(response)
    // }));
  }

  logout() {
    localStorage.clear();
    this.userSubject$.next(null);
    this.router.navigate(['/login'])
  }
}