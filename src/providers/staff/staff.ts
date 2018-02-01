import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ConnectionProvider } from '../connection/connection';
import { Observable } from 'rxjs' ;

/*
  Generated class for the StaffProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
export class Staff{
  id: number;
  name: string;
  lastname: string;
  nickname: string;
  tel: string;
  Division: string;
  start: string;
  end: string;
}

@Injectable()
export class StaffProvider {

  constructor(public http: Http,
              public conn: ConnectionProvider) {
  }

  loadStaff(): Observable<Staff[]>{
    return  this.http.get(this.conn.severPathAPI+'/Staff')
              .map(res => res.json());
  }
}
