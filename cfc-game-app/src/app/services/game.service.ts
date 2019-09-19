import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GameService {
  constructor(private http: HttpClient) {}

  gameWin(): Observable<any> {
    return this.http
      .get(`http://localhost:3000/`)
      .pipe // change to correct API request
      // do some logic here
      ();
  }

  gameFail(): Observable<any> {
    return this.http
      .get(`http://localhost:3000/`)
      .pipe // change to correct API request
      // do some logic here
      ();
  }
  gameStart(): Observable<any> {
    return this.http
      .get(`http://localhost:3000/`)
      .pipe // change to correct API request
      // do some logic here
      ();
  }

  gameEnd(): Observable<any> {
    return this.http
      .get(`http://localhost:3000/`)
      .pipe // change to correct API request
      // do some logic here
      ();
  }

  gameClose(): Observable<any> {
    return this.http
      .get(`http://localhost:3000/`)
      .pipe // change to correct API request
      // do some logic here
      ();
  }

  gameReady(): Observable<any> {
    return this.http
      .get(`http://localhost:3000/`)
      .pipe // change to correct API request
      // do some logic here
      ();
  }

  gameInstall(): Observable<any> {
    return this.http
      .get(`http://localhost:3000/`)
      .pipe // change to correct API request
      // do some logic here
      ();
    // window.install && window.install();
  }
}
