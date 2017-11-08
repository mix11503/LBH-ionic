import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ConnectionProvider } from '../connection/connection';
import { UserProvider } from '../user/user';
import { Observable } from 'rxjs' ;

/*
  Generated class for the ParcelProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
export class Parcel{
  id: number; 
  name: string;
  barcode: string;
  status: boolean;
  date: string;
  roomId: number;
  pickStamp: string;
  isPrint: boolean;
}

@Injectable()
export class ParcelProvider {

  constructor(public http: Http, 
              public conn: ConnectionProvider,
              public user: UserProvider) {
  }

  loadParcel(): Observable<Parcel[]>{
    return  this.http.get(this.conn.severPathAPI+'/Parcel?roomId='+this.user.roomId).map(res => res.json());
  }

}
