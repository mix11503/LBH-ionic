import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ConnectionProvider } from '../connection/connection';
import { UserProvider } from '../user/user';
import { Observable } from 'rxjs' ;

/*
  Generated class for the KeycardProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
export class Keycard{

}

export class KeycardReq{

}

@Injectable()
export class KeycardProvider {

  constructor(public http: Http,
              public user: UserProvider,
              public conn: ConnectionProvider) {
  }

  loadKeycard(): Observable<Keycard[]>{
    return  this.http.get(this.conn.severPathAPI+'/Keycard?roomId=202')
              .map(res => res.json());
  }

  loadKeycardReq(): Observable<KeycardReq[]>{
    return  this.http.get(this.conn.severPathAPI+'/KeycardReq?roomId=202')
              .map(res => res.json());
  }

}
