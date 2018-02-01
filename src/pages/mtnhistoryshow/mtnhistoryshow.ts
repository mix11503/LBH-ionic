import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MaintenanceReq } from '../../providers/maintenance-req/maintenance-req';

/**
 * Generated class for the MtnhistoryshowPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mtnhistoryshow',
  templateUrl: 'mtnhistoryshow.html',
})
export class MtnhistoryshowPage {

  mtnReq: MaintenanceReq;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mtnReq = this.navParams.get("mtn");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MtnhistoryshowPage');
  }

}
