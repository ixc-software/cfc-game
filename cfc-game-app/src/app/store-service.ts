
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';


@Injectable()
export class DataService {

    data = new BehaviorSubject('');
    constructor() {}

    getParams(): Observable<any> | any {
        return this.data;
    }
}
