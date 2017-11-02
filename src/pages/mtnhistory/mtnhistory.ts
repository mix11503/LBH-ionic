import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MtnhistoryshowPage } from '../mtnhistoryshow/mtnhistoryshow';
import { MaintenanceReq, MaintenanceReqProvider } from '../../providers/maintenance-req/maintenance-req';
import { UserProvider } from '../../providers/user/user';
/**
 * Generated class for the MtnhistoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mtnhistory',
  templateUrl: 'mtnhistory.html',
})
export class MtnhistoryPage {
  roomId: string;
  mtnList: MaintenanceReq[] = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public user: UserProvider,
              public mtnProv: MaintenanceReqProvider) {
    this.roomId = this.user.roomId;
    this.mtnProv.loadMTN().subscribe(data => { this.mtnList = data });
  }

   MtnhistoryshowPage(){
  	this.navCtrl.push(MtnhistoryshowPage);
  }

}
