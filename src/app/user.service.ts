import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './template-driven-signup/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  getById(id: number) : Observable<User>{
    return this.httpClient.get<User>(`https://5ed74760152c310016d84d62.mockapi.io/api/users/${id}`)
  }

  save(payload: User) : Observable<{status: boolean}>{
    return this.httpClient.post<{status: boolean}>(`https://5ed74760152c310016d84d62.mockapi.io/api/users`, payload)
  }

  checkDuplicity(payload: User) : Observable<{valid: boolean}>{
    return this.httpClient.post<{valid: boolean}>(`https://5ed74760152c310016d84d62.mockapi.io/api/validation`, payload)
  }
}
