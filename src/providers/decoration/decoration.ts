import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ConnectionProvider } from '../connection/connection';
import { UserProvider } from '../user/user';
import { Observable } from 'rxjs' ;

/*
  Generated class for the DecorationProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
export class Decoration{
  id: number;
  desc: string;
  start: string;
  end: string;
  status: boolean;
  roomId: number;
  reqDate: string;
  usName: string;
  app_by: string;
}

@Injectable()
export class DecorationProvider {

  constructor(public http: Http,
              public conn: ConnectionProvider,
              public user: UserProvider) {
  }
  
  loadDec(): Observable<Decoration[]>{
    return  this.http.get(this.conn.severPathAPI+'/Decoration?roomId='+this.user.roomId)
              .map(res => res.json());
  }

}
