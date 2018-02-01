import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ConnectionProvider } from '../connection/connection';
import { UserProvider } from '../user/user';
import { Observable } from 'rxjs' ;


/*
  Generated class for the MaintenanceReqProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
export class MaintenanceReq{
  mtn_id: number;
  mtn_work_id: number;
  isPersonal: boolean;
  mtn_date: string;
  mtn_ServiceArea: string;
  mtn_desc: string;
  mtn_result: string;
  mtn_material: string;
  mtn_cost: number;
  mtn_result_eva: string;
  mtn_status: string;
  mtn_eva_remark: string;
  mtn_area_stuff: string;
  mtn_room_id: number;
  mtn_pic: string[];
}
@Injectable()
export class MaintenanceReqProvider {

  constructor(public http: Http,
              public conn: ConnectionProvider,
              public user: UserProvider) {
  }

  loadMTN(): Observable<MaintenanceReq[]>{
    return  this.http.get(this.conn.severPathAPI+'/MTN?roomId='+this.user.roomId)
              //{
                //roomId: this.user.roomId
              //})
              .map(res => res.json());
  }

}
