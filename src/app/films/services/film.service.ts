import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class FilmService {

  constructor(private httpClient: HttpClient) { }

  getFilms(): Observable<any> {
    return this.httpClient.get('https://5ed74760152c310016d84d62.mockapi.io/api/films');
  }

  getFilmsAsync(): Promise<any> {
    return lastValueFrom(this.httpClient.get('https://5ed74760152c310016d84d62.mockapi.io/api/films'));
  }

  getFilmById(filmId: string): Observable<any> {
    return this.httpClient.get(`https://5ed74760152c310016d84d62.mockapi.io/api/films/${filmId}`);
  }

  saveFilm(payload: any): Observable<any> {
    return this.httpClient.post('https://5ed74760152c310016d84d62.mockapi.io/api/films', payload);
  }
}
