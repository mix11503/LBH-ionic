import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MtnhistoryshowPage } from '../mtnhistoryshow/mtnhistoryshow';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MtnhistoryPage');
  }

   MtnhistoryshowPage(){
  	this.navCtrl.push(MtnhistoryshowPage);
  }

}
