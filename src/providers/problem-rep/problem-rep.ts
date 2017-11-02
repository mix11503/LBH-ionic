import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ConnectionProvider } from '../connection/connection';
import { UserProvider } from '../user/user';
import { Observable } from 'rxjs' ;

/*
  Generated class for the ProblemRepProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
export class ProblemRep {
  id: number;
  reqDate: string;
  topic: string;
  desc: string;
  status: boolean;
  roomId: number;
}

@Injectable()
export class ProblemRepProvider {

  constructor(public http: Http,
              public conn: ConnectionProvider,
              public user: UserProvider) {
  }

  loadProblem(): Observable<ProblemRep[]>{
    return  this.http.get(this.conn.severPathAPI+'/Problem?roomId=202')
              //{
                //roomId: this.user.roomId
              //})
              .map(res => res.json());
  }
}
