import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable()
export class GameService {
  constructor(private http: HttpClient) {}

  gameWin(): Observable<any> {
    // do some logic here
    return of({});
  }

  gameFail(): Observable<any> {
    // do some logic here
    return of({});
  }
  gameStart(): Observable<any> {
    // do some logic here
    return of({});
  }

  gameEnd(): Observable<any> {
    // do some logic here
    return of({});
  }

  gameClose(): Observable<any> {
    // do some logic here
    return of({});
  }

  gameReady(): Observable<any> {
    // do some logic here
    return of({});
  }

  gameInstall(): Observable<any> {
    // do some logic here
    return of({});
  }
}
