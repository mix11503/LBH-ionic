import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ConnectionProvider } from '../connection/connection';
import { UserProvider } from '../user/user';
import { Observable } from 'rxjs' ;

/*
  Generated class for the MovingStuffProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
export class MovingStuff{
  id: number;
  reqDate: string;
  inOrOut: boolean;
  remark: string;
  dateMove: string;
  status: boolean;
  roomId: number;
  usName: string;
  appBy: string;
}

@Injectable()
export class MovingStuffProvider {

  constructor(public http: Http,
              public conn: ConnectionProvider,
              public user: UserProvider) {
  }

  loadMov(): Observable<MovingStuff[]>{
    return  this.http.get(this.conn.severPathAPI+'/MovingStuff?roomId='+this.user.roomId)
              .map(res => res.json());
  }

}
