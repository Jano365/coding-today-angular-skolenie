import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor() { }

  mock1() {
    const customInterval$ = new Observable((observer: Observer<number>) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++
      }, 10);
    })

    return customInterval$
  }

  mock2() {
    const customInterval$ = new Observable((observer: Observer<number>) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++
      }, 1000);
    })

    return customInterval$
  }

}
